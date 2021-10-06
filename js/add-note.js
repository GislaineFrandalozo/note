import { session } from './session.js'

const newSession = session.verifySession("html/home-note.html")

/* Settings */
const settings = document.querySelector("#settings")
settings.addEventListener('click', () => {
    const set = new Promise((resolve, reject) => {
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
    set.then(() => {
        const button = document.querySelector("#sign_out")
        button.addEventListener('click', () => {
            const exit = session.sign_outSession("html/home-note.html")
        })
    }).catch((control) => {
        control.remove()
    })

})

/* Menu */
const colorNote = document.querySelector(".color")
const note = document.querySelector(".note")        /* posso usar note.value */ 
note.style.backgroundColor = colorNote.value
colorNote.addEventListener('change', (e) => {
    note.style.backgroundColor = e.target.value
})

const text = document.querySelector("#text")
text.addEventListener('click', (e) => {
    console.log(e)
    const text2 = new Promise((resolve, reject) => {
      const textControl = document.querySelector('.attribute')
        if (textControl) {
            reject(textControl)
        }else {
            const textElement = document.querySelector("#main")
            const textDiv = document.createElement("div")
            textElement.appendChild(textDiv)
            textDiv.setAttribute('class', 'attribute')
            textDiv.innerHTML = '<h1>Digite um texto</h1><input type=text>'
            resolve()
        }
    })
    text2.then(() => {
        alert("Desculpa ainda não desenvolvemos esta operação :c")
       console.log("chega por hj!")
    }).catch((textControl) => {
        textControl.remove()
    })

})
const checklist = document.querySelector("#checklist")
checklist.addEventListener('click', () => {
    alert("Desculpa ainda não desenvolvemos esta operação :c")
})
const table = document.querySelector("#table")
table.addEventListener('click', () => {
    alert("Desculpa ainda não desenvolvemos esta operação :c")
})
const link = document.querySelector("#link")
link.addEventListener('click', () => {
    alert("Desculpa ainda não desenvolvemos esta operação :c")
})
const calculator = document.querySelector("#calculator")
calculator.addEventListener('click', () => {
    alert("Desculpa ainda não desenvolvemos esta operação :c")
})