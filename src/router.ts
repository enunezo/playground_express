import { showLogin } from "./routes/login.js"
import { showRegister } from "./routes/register.js"
import { showHome } from "./routes/home.js"

export function router() {

  const path = window.location.pathname
  const token = localStorage.getItem("token")

  const app = document.getElementById("app")!

  if (path === "/home") {

    if (!token) {
      history.replaceState({}, "", "/login")
      return showLogin()
    }
    return showHome()
  }

  if (path === "/register") {
    return showRegister()
  }

  if (path === "/login") {
    return showLogin()
  }

  showLogin()
}