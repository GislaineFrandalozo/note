const button = document.querySelector("#sign_out")
verifySession()
const sign_out = button.addEventListener('click', () => {
    console.log("")
    sign_outSession()
    
})
function sign_outSession() {
    const session = sessionStorage.getItem("online")
    if(session){
    sessionStorage.clear()
    const page_index = document.location.href.replace("html/home-note.html", "html/index.html");
    return document.location = page_index
}
}
function verifySession(){
    const session = sessionStorage.getItem("online")
    if(!session){
        const page_index = document.location.href.replace("html/home-note.html", "html/index.html");
        return document.location = page_index
    }
}