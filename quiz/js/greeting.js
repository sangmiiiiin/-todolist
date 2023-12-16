let quiz = [
    {
        id: 1,
        problem: "나는 지으링을 사랑한다",
        solve: "O"
    },
    {
        id: 2,
        problem: "나는 지으링을 좋아한다",
        solve: "O"
    },
    {
        id:3,
        problem: "나는 지은이를 좋아한다",
        solve: "O"
    }
];

const paintQuiz = () => {
    startButton.classList.add("hide");
    const quizDiv = document.createElement("div");
    quizDiv.id="quiz"
    document.body.appendChild(quizDiv);
    quizDiv.innerText = quiz[0].problem;

    const quizO = document.createElement("button");
    const quizX = document.createElement("button");
    document.body.appendChild(quizO);
    document.body.appendChild(quizX);
    quizO.classList.add("O");
    quizX.classList.add("X");
    quizO.innerText = "⭕️";
    quizX.innerText = "❌";

    quizO.addEventListener("click", handleO);
    quizX.addEventListener("click", handleX);
};

const handleO = () => {
    const selectAnswerO = document.querySelector(".O");
    if (quiz[0].solve === selectAnswerO.className) {
        alert("정답! ⭕️");
    }
}

const handleX = () => {
    const selectAnswerX = document.querySelector(".X");
    if (quiz[0].solve !== selectAnswerX.className) {
        alert("틀렸어요! ❌");
    }
}

startButton.addEventListener("click", paintQuiz);



