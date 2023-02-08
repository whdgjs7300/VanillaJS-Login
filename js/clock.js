const clock = document.querySelector("#clock");

clock.innerHTML = "kakaka";

// interval 매번 일어나야하는 일 ex) 2초마다 실행하고 싶은 함수

function getClock() {
    const date = new Date();
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
}
// 먼저 함수를 즉시 호출한 후에 셋인터벌 실행
// 1초전에 기존의 HTML 텍스트 형식 보여주기 방지
getClock()
setInterval(getClock, 1000);

// setTimeout = 실행 후 동작 종료

