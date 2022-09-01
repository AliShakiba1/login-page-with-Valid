const userInput = document.querySelector('.user-input')
const usernameMsg = document.querySelector('.username-msg')
const passInput = document.querySelector('.pass-input')
const passwordMsg = document.querySelector('.password-msg')
const signingButton = document.querySelector('.signing-button')
const signingStatus = document.querySelector('.signing-status')

signingButton.addEventListener('click', e => {
  e.preventDefault()
  signingStatus.innerText = ''
  usernameMsg.innerText = ''
  passwordMsg.innerText = ''
  const userName = userInput.value
  const passWord = passInput.value
  let dataValid = true
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/y

  if (regexEmail.test(userName)) {
    dataValid = true
  } else if (!regexEmail.test(userName)) {
    dataValid = false
    usernameMsg.innerText = 'Please enter a valid Email'
  }

  if (passWord.length === 0) {
    passwordMsg.innerText = 'Please enter a Password'
    dataValid = false
  } else if (passWord.length < 5) {
    passwordMsg.innerText = 'Please enter a valid Password'
    dataValid = false
  }

  if (dataValid) {
    const body = JSON.stringify({
      userEmail: userName,
      userPassword: passWord,
    })
    const headers = {
      'Content-Type': 'application/json',
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: body,
      headers: headers,
    }).then(response => {
      if (response.status) {
        signingStatus.innerText = 'You signed in successfully'
      }
    })
  }
})
