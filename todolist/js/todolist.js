const formGroup = document.querySelector("#form-group")
const formGroupInput = document.querySelector("#input")
const ul = document.querySelector("#ul");

let Todo = []

const drawTodoList = (todo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    ul.appendChild(li);
    li.appendChild(span);
    span.innerText = todo;
    li.appendChild(button);
    button.innerText = "❌";
    Todo.push(todo);
}

const handleSubmitTodo = (e) => {
    e.preventDefault()
    let inputValue = formGroupInput.value;
    formGroupInput.value = "";
    drawTodoList(inputValue);
}

const todoDelete = () => {
    
}

formGroup.addEventListener("submit", handleSubmitTodo);






