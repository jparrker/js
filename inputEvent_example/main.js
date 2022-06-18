input = document.querySelector("input")
h1 = document.querySelector('h1') 

input.addEventListener('input', (e) => {
  if(input.value === ""){
    h1.innerText = 'Please Enter Your Username'
  }else {
    h1.innerText = `Welcome, ${input.value}`
  }
})