const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

// form submit은 새로고침이 일어나는 기본동작

function onLoginSubmit(e) {
    const username = loginInput.value;
    // 새로고침을 막아 데이터가 유지되도록 함
    e.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);

