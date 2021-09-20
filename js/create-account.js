const input_name = document.querySelector("#name")
const input_date = document.querySelector("#date")
const input_email = document.querySelector("#email")
const input_password = document.querySelector("#password")
const button = document.querySelector("#button")

button.addEventListener('click', (event) => {
    event.preventDefault()
    try {
        validateInputs(input_name.value, input_password.value)
        const user = new form(input_name.value, input_date.value, input_email.value, input_password.value)
        const userAccount = localStorage.getItem(input_name.value)
        if (userAccount) {
            throw "conta"
        } else {
            localStorage.setItem(input_name.value, JSON.stringify(user))
            alert("Cadastro criado com sucesso, faça login para iniciar a sessão!")
            document.getElementById("createNotification").innerHTML = ""
            input_name.value = ""
            input_date.value = ""
            input_email.value = ""
            input_password.value = ""
        }

    } catch (e) {
        if(e === "name"){
            document.getElementById("createNotification").innerHTML = "Nome muito curto, mínimo 3 caracteres."
        }
        if(e === "senha"){
            document.getElementById("createNotification").innerHTML = "Senha muito curta, mínimo 3 caracteres."
        }
        if(e === "conta"){
            document.getElementById("createNotification").innerHTML = "Este nome já está sendo usado"
        }
    }
})

class form {
    constructor(name, date, email, password) {
        this.name = name
        this.date = date
        this.email = email
        this.password = password
    }
}
function validateInputs(name, password) {
    if (name.length < 3) {
        throw "name"
    }
    if (password.length < 3) {
        throw "senha"
    }
}