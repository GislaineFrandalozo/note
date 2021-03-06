import { session } from './session.js'
import { tools } from './tools.js'
session.verifySession("html/add-note.html")

const colorNote = document.querySelector(".color")
const note = document.querySelector(".note")  
  
/* Settings */
document.querySelector("#settings").addEventListener('click', () => {
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
        document.querySelector("#sign_out").addEventListener('click', () => {
            session.sign_outSession("html/add-note.html")
        })
    }).catch((control) => {
        control.remove()
    })

})

/* Menu */
note.style.backgroundColor = colorNote.value
colorNote.addEventListener('change', (e) => {
    note.style.backgroundColor = e.target.value
})

const param = []
document.querySelector("#text").addEventListener('click', () => {
    const text2 = new Promise((resolve, reject) => {
        const textControl = document.querySelector('.attribute')
        if (textControl) {
            reject(textControl)
        } else {
            const textElement = document.querySelector("#main")
            const textDiv = document.createElement("div")
            textElement.appendChild(textDiv)
            textDiv.setAttribute('class', 'attribute')
            textDiv.innerHTML = '<h2>Digite um texto</h2><textarea name="text" id="textarea"></textarea><button id="buttonTools">ENVIAR</button>'
            resolve()
        }
    })
    text2.then(() => {
        document.querySelector("#buttonTools").addEventListener('click', () => {
            const textArea = document.querySelector("#textarea")
            let vet = '<p class="noteContent">' + textArea.value + '</p>'
            param.push(vet)
            console.log(param)
            console.log(vet)
            textArea.value = ""
            tools.Tools(param, innerText)

            function innerText() {
                const note = document.querySelector(".note")
                const p = document.createElement("p")
                note.appendChild(p)
                p.setAttribute('class', 'textNote')
                p.innerHTML = vet
            }
        })
    }).catch((textControl) => {
        textControl.remove()
    })

})
const checklist = document.querySelector("#checklist")
checklist.addEventListener('click', () => {
    alert("Desculpa ainda n??o desenvolvemos esta opera????o :c")
})
const table = document.querySelector("#table")
table.addEventListener('click', () => {
    alert("Desculpa ainda n??o desenvolvemos esta opera????o :c")
})
const link = document.querySelector("#link")
link.addEventListener('click', () => {
    alert("Desculpa ainda n??o desenvolvemos esta opera????o :c")
})
const calculator = document.querySelector("#calculator")
calculator.addEventListener('click', () => {
    alert("Desculpa ainda n??o desenvolvemos esta opera????o :c")
})