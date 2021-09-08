const inputName = document.querySelector("#name")
const inputPassword = document.querySelector("#password")
const buttonLogin = document.querySelector("#button")
loginAccount ()
const login = buttonLogin.addEventListener('click', () => {
    try{
    console.log(" ");
    const validatePassword = validateInputs(inputName.value, inputPassword.value)
    if(validatePassword == "true"){
    sessionStorage.setItem("online", inputName.value)
        
    }else{
        return alert("erro")
    }
    }catch (e){
        alert(e);
    }
     
})
function loginAccount () {
    const session = sessionStorage.getItem("online")
    if(session){
    const page_home = document.location.href.replace("html/login.html", "html/home-note.html");
    return document.location = page_home
    }
    }

function validateInputs (name, password){
    const userStorage = localStorage.getItem(name)
    if (userStorage){
    const user = JSON.parse(userStorage)

    if(user.password == password){
    return "true"
    }else{
        throw "senha invalida"
    }

    }else{
        throw "Voce n'ao tem uma conta com esse nome"
    }
}