const userName = document.querySelector("#user-name");
const formContainer = document.querySelector("#form-group");
const formInput = document.querySelector("#login-input");
const button = document.querySelector("#login-button");
const USERID_KEY = "userId"
let userId = []

const handleLogin = (e) => {
    e.preventDefault();
    let inputValue = formInput.value;
    formInput.value = "";
    userId.push(inputValue);
    saveUserId()
}

const saveUserId = () => {
    localStorage.setItem(USERID_KEY, JSON.stringify(userId));
}

const paintId = (Id) => {
    userName.innerText = `${Id} 님 환영합니다!`;
}

const savedId = localStorage.getItem(USERID_KEY);
if(savedId === null) {
    formContainer.classList.remove("hide");
} else {
    formContainer.classList.add("hide");
    userName.classList.remove("hide");
    const parsedId = JSON.parse(savedId);
    console.log(parsedId);
    paintId(parsedId)

}

formContainer.addEventListener("submit", handleLogin);
