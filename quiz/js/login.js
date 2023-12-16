const userName = document.querySelector("#user-name");
const formContainer = document.querySelector("#form-group");
const formInput = document.querySelector("#login-input");
const USERID_KEY = "userId"
const startButton = document.querySelector("#start-button");
const quizProblem = document.querySelector("#quiz");

const handleLogin = (e) => {
    e.preventDefault();
    let inputValue = formInput.value;
    formInput.value = "";
    formContainer.classList.add("hide");
    userName.classList.remove("hide");
    startButton.classList.remove("hide");
    paintId(inputValue)
    localStorage.setItem("userId", inputValue);
}

const paintId = (Id) => {
    userName.innerText = `${Id}님 환영합니다!`;
    const logOutButton = document.createElement("button");
    userName.append(logOutButton);
    logOutButton.innerText = "로그아웃 하기";
    logOutButton.addEventListener("click", deleteId);
}

const deleteId = () => {
    localStorage.clear();
    userName.classList.add("hide");
    formContainer.classList.remove("hide");
    startButton.classList.add("hide");
    quizProblem.classList.add("hide");

}

const savedId = localStorage.getItem(USERID_KEY);

if(savedId === null) {
    formContainer.classList.remove("hide");
    formContainer.addEventListener("submit", handleLogin);
} else {
    formContainer.classList.add("hide");
    userName.classList.remove("hide");
    startButton.classList.remove("hide");
    paintId(savedId)
}


