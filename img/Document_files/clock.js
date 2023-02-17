const clock = document.querySelector("#clock");

clock.innerHTML = "kakaka";


// padStart() string 길이를 2개로 만들어줌
// 시작 지점에 인자값을 (길이, 들어갈 내용) - ex) padStart(2, "0")
// padStart는 숫자값을 String으로 바꾸고 사용함

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
// 먼저 함수를 즉시 호출한 후에 셋인터벌 실행
// 1초전에 기존의 HTML 텍스트 형식 보여주기 방지

getClock()
// interval 매번 일어나야하는 일 ex) 2초마다 실행하고 싶은 함수
setInterval(getClock, 1000);

// setTimeout = 실행 후 동작 종료


