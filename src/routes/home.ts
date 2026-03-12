async function checkAuth() {

  const token = localStorage.getItem("token")

  if (!token) {
    window.location.href = "/login.html"
    return
  }

  const res = await fetch("/api/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    window.location.href = "/login"
    return
  }

  const data = await res.json()

  document.body.innerHTML = `<h1>Welcome</h1>`
}

export async function showHome() {

  const token = localStorage.getItem("token")

  if (!token) {
    history.pushState({}, "", "/login")
    window.dispatchEvent(new Event("popstate"))
    return
  }

  const res = await fetch("/api/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    localStorage.removeItem("token")

    history.pushState({}, "", "/login")
    window.dispatchEvent(new Event("popstate"))
    return
  }

  const app = document.getElementById("app")!

  app.innerHTML = `
  <div class="flex items-center justify-center h-screen bg-gray-100">

    <div class="bg-white p-8 rounded-xl shadow-md">

      <h1 class="text-2xl font-bold mb-4">Welcome 🎉</h1>

    </div>

  </div>
  `

  document.getElementById("logout")!.addEventListener("click", () => {

    localStorage.removeItem("token")

    history.pushState({}, "", "/login")

    window.dispatchEvent(new Event("popstate"))

  })
}