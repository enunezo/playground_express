async function login() {

  const email = (document.getElementById("email") as HTMLInputElement).value.trim()
  const password = (document.getElementById("password") as HTMLInputElement).value

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()

  localStorage.setItem("token", data.token)

  history.pushState({}, "", "/home")
  window.dispatchEvent(new Event("popstate"))

}

export function showLogin() {

  const app = document.getElementById("app")!

  app.innerHTML = `
    <div class="flex items-center justify-center h-screen bg-gray-100">

    <div class="bg-white p-6 rounded-xl shadow-md w-80">

      <h1 class="text-xl font-bold mb-4">Login</h1>

      <input id="email" placeholder="Email"
        class="border p-2 w-full mb-3 rounded"/>

      <input id="password" type="password" placeholder="Password"
        class="border p-2 w-full mb-4 rounded"/>

      <button id="loginBtn"
        class="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Login
      </button>
      <br>
      <p>Do you need to create an account? <button id="goRegister"
      class="bg-blue-500 text-white px-4 py-2 rounded w-full">Register</button></p>

    </div>
    
  </div>
  `
  const btn = document.getElementById("loginBtn")!

  btn.addEventListener("click", login)
  document.getElementById("goRegister")!.addEventListener("click", () => {
    history.pushState({}, "", "/register")
    window.dispatchEvent(new Event("popstate"))
  })
}