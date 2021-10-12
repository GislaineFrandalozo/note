class editNote{
    static delete(user, buttonDelete){
        const notification = document.querySelector(".main") 
        const div = document.createElement("div")
        notification.appendChild(div)
        div.setAttribute('class', 'ALERT')
        div.innerHTML = '<p>DESEJA EXLUIR ?</p><button id="yes">SIM</button><button id="cancel">cancelar</button>'
        document.querySelector("#yes").addEventListener('click', () => {
            const divDaddy = buttonDelete.parentNode
            console.log(divDaddy.parentNode)
            const divContent = divDaddy.parentNode.childNodes
            console.log(divContent[1].innerHTML)
            const vet = divContent[1].innerHTML
            const userContent = user.content
            const indexNote = userContent.indexOf(vet)
            divDaddy.parentNode.remove()
            div.remove()
            console.log(userContent)
        })

    }
}
export { editNote }