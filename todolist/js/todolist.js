const formGroup = document.querySelector("#form-group")
const formGroupInput = document.querySelector("#input")
const ul = document.querySelector("#ul");

const TODOS_KEY = "todos";

let todos = []

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

const drawTodoList = (newToDo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    ul.appendChild(li);
    li.appendChild(span);
    span.innerText = newToDo.text;
    li.appendChild(button);
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
}

const handleSubmitTodo = (e) => {
    e.preventDefault()
    let inputValue = formGroupInput.value;
    formGroupInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: inputValue
    }
    todos.push(newTodoObj);
    drawTodoList(newTodoObj);
    saveToDos();
}

const deleteTodo = (e) => {
    const li = e.target.parentElement;
    li.remove();
}

formGroup.addEventListener("submit", handleSubmitTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos);
    todos = parseTodos;
    parseTodos.forEach(drawTodoList);
    
}
