import "./style.css"

fetch("/api/server")
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML += `<p>${data.message}</p>`
  })