import { session } from './session.js'

session.verifySession("html/home-note.html")

const sessionUser = sessionStorage.getItem("online")
addNote(sessionUser)
user(sessionUser)
    // Settings 
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
    console.log(user.content)
    
    await localstorage(user); 
    return new Promise(resolve => {
        const section = document.querySelector('.main')
        for(let x = 0; x < user.content.length; x++){
            const div = document.createElement("div")
            section.appendChild(div)
            div.setAttribute('class', 'note')
            const titleStorage = user.attributesNote[x]
            div.style.background = titleStorage[0]
            div.innerHTML = '<h2>' + titleStorage[1] +'</h2><button class="delete">X</button><div>' + user.content[x] + '</div>'
        }
        resolve()
    }) ;
}
function localstorage(user) {
    console.log(user.content)
    return new Promise((resolve, reject) => {
        if(user.content.length == 0){
            reject()
        }else{
            resolve()
        }
    });
}
  
    // user
function user(sessionUser) {
    console.log(sessionUser)
    const title = document.querySelector('#title')
    title.innerText = 'Bem vindo, ' + sessionUser + '!'
}