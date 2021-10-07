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
            user.content.push(paramContent)
            console.log(user.content)
            localStorage.setItem(session, JSON.stringify(user))
            const page = document.location.href.replace("html/add-note.html", "html/home-note.html");
            return document.location = page
        })
    }

}
export { tools }