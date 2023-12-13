const formGroup = document.querySelector("#form-group")
const formGroupInput = document.querySelector("#input")
const ul = document.querySelector("#ul");

let Todo = []

const handleAddlist = (e) => {
    e.preventDefault()
    let inputValue = formGroupInput.value;
    formGroupInput.value = "";
    const li = document.createElement("li");
    const span = document.createElement("span")
    li.innerText = inputValue;
    ul.appendChild(li);
    Todo.push(inputValue);
}

formGroup.addEventListener("submit", handleAddlist);


localStorage.setItem("key", `${Todo}`)

