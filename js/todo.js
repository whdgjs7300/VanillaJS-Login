const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const todos = [];

function saveTodos() {
    // stringify 배열이나 오브젝트를 문자열로 반환함
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
    e.target.parentElement.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML = "X"
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerHTML = newTodo;
    todoList.appendChild(li);
}


function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


// parse는 다시 문자열을 배열형식으로 변환
const savedTodos = JSON.parse(localStorage.getItem("todos"));

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach((item)=>{
        console.log(item);
    });
}