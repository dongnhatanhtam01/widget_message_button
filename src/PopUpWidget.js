export class BtnWidget {
 constructor({ position = 'bottom-right' } = {}) {
  this.position = this.getPosition(position)
  // {bottom: '30px', right: '30px'}
  this.open = false
  this.initialise()
  this.createStyle()
 }
 getPosition(position) {
  const [vertical, horizontal] = position.split('-')
  return {
   [vertical]: '30px',
   [horizontal]: '30px'
  }
 }
 initialise() {
  const container = document.createElement('div')
  container.style.position = 'fixed'

  Object.keys(this.position)
   .forEach(key => container.style[key] = this.position[key])
  document.body.appendChild(container)

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('button-container')

  const chatIcon = document.createElement('img')
  chatIcon.src = 'assets/chat.svg'
  chatIcon.classList.add('icon')
  // create class property
  this.chatIcon = chatIcon


  const closeIcon = document.createElement('img')
  closeIcon.src = 'assets/cross.svg'
  closeIcon.classList.add('icon', 'hidden')
  // create class property member
  this.closeIcon = closeIcon


  this.messageContainer = document.createElement('div')
  this.messageContainer.classList.add('hidden', 'message-container')

  // Create all of the content message container
  this.createMessageContainerContent()

  buttonContainer.appendChild(this.chatIcon)
  buttonContainer.appendChild(this.closeIcon)

  container.appendChild(this.messageContainer)
  container.appendChild(buttonContainer)
 }
 createStyle() {
  const styleTag = document.createElement('style')
  document.head.appendChild(styleTag);

  styleTag.innerHTML = `
   .icon{
    cursor: pointer;
    width: 70%;
    position: absolute;
    top: 9px;
    left: 9px;
    transition: transform .3s ease;
   }
   .hidden {
    transform: scale(0)
   }
   .button-container {
    background-color: #04b73f;
    width: 60px;
    height: 60px;
    border-radius:50%;
   }
   .message-container {
    box-shadow: 0 0  18px 8px rgba(0,0,0,.1);
    width: 400px;
    right: -25px;
    bottom: 75px;
    max-height:400px;
    position:absolute;
    transition: max-height .2 ease;
    font-family: Helvetica, Arial, sans-serif;
   }
   .message-container.hidden {
    max-height: 0px;
   }
   .message-container h2 {
    margin: 0;
    padding:20px;
    color: #fff;
    background-color: #04b73f
   }
   .message-container form * {
    margin: 5px 0;
   }
   .message-container form input {
    padding: 10px;
   }
   .message-container form textarea{
     height: 100px;
     padding: 10px;
   }
   .message-container form textarea::placeholder {
    font-family:  Helvetica, Arial, sans-serif; 
   }
   .message-container form button {
    cursor: pointer;
    background-color: #4b73f;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 10px;
   }
   .message-container form button:hover {
    background-color: #16632f
   }
  `
 }
 createMessageContainerContent() {
  this.messageContainer.innerHTML = ''
  const title = document.createElement('h2')
  title.textContent = `We are not here, drop us an email...`

  const form = document.createElement('form')
  form.classList.add('content')

  const email = document.createElement('input')
  email.required = true
  email.id = 'email'
  email.type = 'email'
  email.placeholder = 'Enter your email address.'

  const message = document.createElement('textarea')
  message.required = true
  message.id = 'message'
  message.placeholder = 'Your message'

  const btn = document.createElement('button')
  btn.textContent = "Submit"

  form.appendChild(email)
  form.appendChild(message)
  form.appendChild(btn)
  form.addEventListener('submit', this.submit.bind(this))

  this.messageContainer.appendChild(title)
  this.messageContainer.appendChild(form)
 }
 submit() {

 }
}