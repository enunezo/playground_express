import "./style.css"

fetch("http://localhost:3000/")
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

console.log("Vite running")