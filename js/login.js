const inputName = document.querySelector("#name")
const inputPassword = document.querySelector("#password")
const buttonLogin = document.querySelector("#button")
buttonLogin.addEventListener('click', (event) => {
    event.preventDefault()
    try {
        const validatePassword = validateInputs(inputName.value, inputPassword.value)
        if (validatePassword == "true") {
            sessionStorage.setItem("online", inputName.value)
            loginAccount()

        } else {
            return alert("erro")
        }
    } catch (e) {
        alert(e);
    }

})
function loginAccount() {
    const session = sessionStorage.getItem("online")
    if (session) {
        const page_home = document.location.href.replace("html/login.html", "html/home-note.html");
        return document.location = page_home
    }
}

function validateInputs(name, password) {
    const userStorage = localStorage.getItem(name)
    if (userStorage) {
        const user = JSON.parse(userStorage)

        if (user.password == password) {
            return "true"
        } else {
            throw "Senha inválida"
        }

    } else {
        throw "Vocẽ não tem uma conta com este nome"
    }
}