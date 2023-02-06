const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// form submit은 새로고침이 일어나는 기본동작

function onLoginSubmit(e) {
    // 새로고침을 막아 데이터가 유지되도록 함
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleclick(e) {
    // 브라우저 기본동작을 막음
    e.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
