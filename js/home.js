import { session } from './session.js'
import { editNote } from './editNote.js'

session.verifySession("html/home-note.html")

const sessionUser = sessionStorage.getItem("online")
user(sessionUser)
addNote(sessionUser).then( user => {
    const buttonDelete = document.querySelectorAll(".delete")
    for (let y = 0; y < buttonDelete.length; y++) {
        buttonDelete[y].addEventListener('click', () => {
            console.log("!!!!!!!!!!")
            editNote.delete(user, buttonDelete[y] )
        })
    }
    
    const noteContent = document.querySelectorAll(".noteContent")
    console.log(noteContent)
    for (let x = 0; x < noteContent.length; x++) {
        noteContent[x].addEventListener('click', () => {
            console.log("**************************")
        })
    }
})


// Settings 
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
            session.sign_outSession("html/home-note.html")
        })
    }).catch((control) => {
        control.remove()
    })

})
// tools

async function addNote(sessionUser) {
    const userStorage = localStorage.getItem(sessionUser)
    const user = JSON.parse(userStorage)

    await localstorage(user);
    return new Promise(resolve => {
        const section = document.querySelector('.main')
        for (let x = 0; x < user.content.length; x++) {
            const div = document.createElement("div")
            section.appendChild(div)
            div.setAttribute('class', 'note')
            const titleStorage = user.attributesNote[x]
            div.style.background = titleStorage[0]
            div.innerHTML = '<div><h2>' + titleStorage[1] + '</h2><button class="delete">X</button></div><div class="content">' + user.content[x] + '</div>'
        }
        resolve(user)
    });
}
function localstorage(user) {
    return new Promise((resolve, reject) => {
        if (user.content.length == 0) {
            reject()
        } else {
            resolve()
        }
    });
}

// user
function user(sessionUser) {
    document.querySelector('#title').innerText = 'Bem vindo, ' + sessionUser + '!'
}