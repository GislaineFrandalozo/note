class tools {
    static Tools(paramContent, callback) {
        const textControl = document.querySelector('.attribute')
        textControl.remove()
        callback()
        const session = sessionStorage.getItem("online")
        const userStorage = localStorage.getItem(session)
        const user = JSON.parse(userStorage)
        const createNote = document.querySelector("#createNote")
        createNote.addEventListener('click', () => {
            const input = document.querySelector('#inputTitle')
            const colorNote = document.querySelector(".color")
            user.content.push(paramContent)
            console.log(user.content)
            let userAttributes = [colorNote.value, input.value] 
            user.attributesNote.push(userAttributes)
            localStorage.setItem(session, JSON.stringify(user))
            const page = document.location.href.replace("html/add-note.html", "html/home-note.html");
            return document.location = page
        })
    }

}
export { tools }