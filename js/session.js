class session{
    static verifySession(index) {
        const page = index
        const session = sessionStorage.getItem("online")
        if (!session) {
            const page_index = document.location.href.replace( page , "html/index.html");
            return document.location = page_index
        }
    }
    static sign_outSession(index) {
        const page = index
        const session = sessionStorage.getItem("online")
        if (session) {
            sessionStorage.clear()
            const page_index = document.location.href.replace( page , "html/index.html");
            return document.location = page_index
        }
    }
}
export { session }