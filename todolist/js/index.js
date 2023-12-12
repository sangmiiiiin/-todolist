const h1 = document.querySelector(".title");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const ul = document.querySelector(".ul");

const handleAddlist = (e) => {
    e.preventDefault()
    const inputValue = input.value;
    console.log(inputValue);
    input.value = "";
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = inputValue;
}

button.addEventListener("click", handleAddlist);

