const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
    // stringify 배열이나 오브젝트를 문자열로 반환함
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((item)=>{
        return item.id !== parseInt(li.id);
    })
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML = "X"
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerHTML = newTodo.text;
    todoList.appendChild(li);
}


function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


// parse는 다시 문자열을 배열형식으로 변환
const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}


