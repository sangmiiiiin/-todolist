const h1 = document.querySelector(".title");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const ul = document.querySelector(".ul");

let Todo = []

const handleAddlist = (e) => {
    e.preventDefault()
    const inputValue = input.value;
    console.log(inputValue);
    input.value = "";
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = inputValue;
    li.classList.add(Date.now());
    const id  = document.querySelector("#id");
    Todo.push(inputValue);
    console.log(Todo);
}

button.addEventListener("click", handleAddlist);


localStorage.setItem("key", `${Todo}`)

