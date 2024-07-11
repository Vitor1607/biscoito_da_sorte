const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

function handleClick(event) {
  event.preventDefault()

  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

btnReset.addEventListener('click', function(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
})

