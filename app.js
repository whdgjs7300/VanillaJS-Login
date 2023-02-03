const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginBtnClick() {
    
    console.log("클릭");
}



loginButton.addEventListener("click", onLoginBtnClick);