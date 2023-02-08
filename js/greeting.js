const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// form submit은 새로고침이 일어나는 기본동작

function onLoginSubmit(e) {
    // 새로고침을 막아 데이터가 유지되도록 함
    e.preventDefault();
    const username = loginInput.value;
    // 로컬스토리지에 유저네임 저장
    localStorage.setItem("username", username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
}
// 그리팅을 보여주는 함수(h1) = 화면에 텍스트만 보여주는 함수
function paintGreetings() {
    const username = localStorage.getItem("username");
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
}




// 로컬스토리지안에 유저네임이 있을때, 없을 때
const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
    // 폼 화면을 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // 그리팅을 보여줌 (h1)
    paintGreetings();
}
