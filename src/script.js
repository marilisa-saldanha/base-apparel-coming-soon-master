const submit = document.querySelector('.submitButton')
const error = document.querySelector('.error')
const form = document.querySelector('form')
const input = document.querySelector('input')
const label = document.querySelector('label')

form.addEventListener('submit', validate)
submit.addEventListener('click', validate)

function validate(ev) {
  ev.preventDefault()

  const inputValue = input.value.trim()

  if (!isEmail(inputValue)) {
    error.style.display = "block"
    label.style.display = "block"
    input.classList.add('errorInput')
  } else {
    error.style.display = "none"
    label.style.display = "none"
    input.classList.remove('errorInput')
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}
