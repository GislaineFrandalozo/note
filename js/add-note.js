import { session } from './session.js'

const newSession = session.verifySession("html/add-note.html")

const button = document.querySelector("#sign_out")
button.addEventListener('click', () => {
    const exit = session.sign_outSession("html/add-note.html")
})