async function register() {

  const name = (document.getElementById("name") as HTMLInputElement).value
  const email = (document.getElementById("email") as HTMLInputElement).value.trim()
  const password = (document.getElementById("password") as HTMLInputElement).value

  await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  })

  history.pushState({}, "", "/login")

  window.dispatchEvent(new Event("popstate"))
}

export function showRegister() {

  const app = document.getElementById("app")!

  app.innerHTML = `

    <div class="flex items-center justify-center h-screen bg-gray-100">

    <div class="bg-white p-6 rounded-xl shadow-md w-80">

      <h1 class="text-xl font-bold mb-4">Register</h1>
      <input id="name" placeholder="Name"
        class="border p-2 w-full mb-3 rounded"/> 

      <input id="email" placeholder="Email"
        class="border p-2 w-full mb-3 rounded"/>

      <input id="password" type="password" placeholder="Password"
        class="border p-2 w-full mb-4 rounded"/>

      <button id="registerBtn"
        class="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Register
      </button>

      <br>
      <p>Already have an account? <button id="goLogin"
      class="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button></p>
    </div>
    
  </div>
  `

  const btn = document.getElementById("registerBtn")!
  btn.addEventListener("click", register)
  document.getElementById("goLogin")!.addEventListener("click", () => {
  history.pushState({}, "", "/login")
  window.dispatchEvent(new Event("popstate"))
})
}