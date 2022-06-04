const form = document.querySelector("form")
const ul = document.querySelector("#list")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const quantity = document.querySelector("#qty")
  const product = document.querySelector("#product")

  const li = document.createElement("li") 
  li.innerText = `${quantity.value} ${product.value}`
  ul.appendChild(li) 
  quantity.value =""
  product.value = ""
})