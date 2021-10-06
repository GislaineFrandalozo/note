import { session } from './session.js'

const newSession = session.verifySession("html/home-note.html")

/* Settings */
const settings = document.querySelector("#settings")
settings.addEventListener('click', () => {
    const x = new Promise((resolve, reject) => {
        const control = document.querySelector('.options')
        if (control) {
            reject(control)
        } else {
            const element = document.querySelector(".settings")
            const div = document.createElement("div")
            element.appendChild(div)
            div.setAttribute('class', 'options')
            div.innerHTML = '<button id="sign_out">SAIR</button>'
            resolve()
        }
    })
    x.then(() => {
        const button = document.querySelector("#sign_out")
        button.addEventListener('click', () => {
            const exit = session.sign_outSession("html/home-note.html")
        })
    }).catch((control) => {
        control.remove()
    })

})
