let quiz = [
    {
        id: 1,
        problem: "나는 지으링을 사랑한다",
        solve: "O"
    },
    {
        id: 2,
        problem: "지으링은 예쁘다",
        solve: "O"
    },
    {
        id: 3,
        problem: "나는 지은이를 좋아한다",
        solve: "O"
    },
    // {
    //     id: 4,
    //     problem: "나는 지은이를 싫어한다",
    //     solve: "X"
    // }
];
let quizNumber = 0;

const paintQuiz = () => {
    startButton.classList.add("hide");
    const quizDiv = document.createElement("div");
    quizDiv.id = "quiz"
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
    const nextQuiz = document.querySelector("#quiz");
    if (quiz[quizNumber].solve === selectAnswerO.className) {
        alert("정답! ⭕️");
        quizNumber++;
        console.log(quizNumber);
        if (quizNumber < quiz.length) {
            nextQuiz.innerText = quiz[quizNumber].problem;
        } else {
            const finish = document.querySelector("#quiz");
            finish.innerText = "준비된 문제를 모두 풀었습니다!";
            const O_Button = document.querySelector(".O");
            const X_Button = document.querySelector(".X");
            O_Button.remove();
            X_Button.remove();
        }
        
    } else {
        alert("틀렸어요! ❌")
    }
}

const handleX = () => {
    const selectAnswerX = document.querySelector(".X");
    if (quiz[quizNumber].solve === selectAnswerX.className) {
        alert("정답! ⭕️");

        if (quizNumber >= quiz.length - 1) {
            const finish = document.querySelector("#quiz");
            finish.innerText = "준비된 문제를 모두 풀었습니다!";
            const O_Button = document.querySelector(".O");
            const X_Button = document.querySelector(".X");
            O_Button.classList.add("hide");
            X_Button.classList.add("hide");
        } else {
            quizNumber++;
            const nextQuiz = document.querySelector("#quiz");
            nextQuiz.innerText = quiz[quizNumber].problem;
        }
    } else {
        alert("틀렸어요! ❌");
    }
}

if (quizNumber > 4) {
    
}


startButton.addEventListener("click", paintQuiz);



