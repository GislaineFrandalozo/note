const input_name = document.querySelector("#name")
const input_date = document.querySelector("#date")
const input_email = document.querySelector("#email")
const input_password = document.querySelector("#password")
const button = document.querySelector("#button")

const crateAccount = button.addEventListener('click', () => {

    try {
        const e = validateInputs(input_name.value, input_password.value)
        console.log(e)
        const user = new form(input_name.value, input_date.value, input_email.value, input_password.value)
        const userAccount = localStorage.getItem(input_name.value)
        if (userAccount) {
            throw "Este nome já está sendo usado"
        } else {
            localStorage.setItem(input_name.value, JSON.stringify(user))
            console.log(localStorage)
            alert("Cadastro criado com sucesso, faça login para iniciar a sessão!")
        }

    } catch (e) {
        alert(e)
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
        throw "Nome muito curto, no mínimo três caracteres."
    }
    if (password.length < 3) {
        throw "Senha muito curta, no mínimo três caractres."
    }
    else {
        return ""
    }
}