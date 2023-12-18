let quiz = [
    {
        id: 0,
        problem: "나는 지으링을 좋아한다",
        solve: "O"
    },
    {
        id: 1,
        problem: "나는 지은이를 사랑한다",
        solve: "O"
    },
    {
        id: 2,
        problem: "지은이는 예쁘다",
        solve: "O"
    },
    {
        id: 3,
        problem: "상미링은 바보다",
        solve: "X"
    },
    {
        id: 4,
        problem: "지은이의 생일은?",
        solve: "0523"
    }
];
let quizNumber = 0;

const paintAnswer = () => {
    if(quizNumber === 3) {
        OX_Button.classList.add("hide");
        const AnswerInput = document.createElement("input");
        quizProblem.appendChild(AnswerInput);
    }

}

const paintQuiz = () => {
    startButton.classList.add("hide");
    quizProblem.classList.remove("hide");
    OX_Button.classList.remove("hide");
    const quizDiv = document.createElement("div");
    quizDiv.classList = "quiz"
    quizProblem.appendChild(quizDiv);
    quizDiv.innerText = quiz[0].problem;
    const quizO = document.createElement("button");
    const quizX = document.createElement("button");
    OX_Button.appendChild(quizO);
    OX_Button.appendChild(quizX);
    quizO.classList.add("O");
    quizX.classList.add("X");
    quizO.innerText = "⭕️";
    quizX.innerText = "❌";

    quizO.addEventListener("click", handleO);
    quizX.addEventListener("click", handleX);
};

const handleO = () => {
    paintAnswer();
    const selectAnswerO = document.querySelector(".O");
    const nextQuiz = document.querySelector(".quiz");
    if (quiz[quizNumber].solve === selectAnswerO.className) {
        alert("정답! ⭕️");
        quizNumber++;
        console.log(quizNumber);
        if (quizNumber < quiz.length) {
            nextQuiz.innerText = quiz[quizNumber].problem;
        } else {
            const finish = document.querySelector(".quiz");
            finish.innerText = "준비된 문제를 모두 풀었습니다!";
            paintImage();
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
    paintAnswer();
    const selectAnswerX = document.querySelector(".X");
    if (quiz[quizNumber].solve === selectAnswerX.className) {
        alert("정답! ⭕️");

        if (quizNumber >= quiz.length - 1) {
            const finish = document.querySelector(".quiz");
            finish.innerText = "준비된 문제를 모두 풀었습니다!";
            paintImage();
            const O_Button = document.querySelector(".O");
            const X_Button = document.querySelector(".X");
            O_Button.classList.add("hide");
            X_Button.classList.add("hide");
        } else {
            quizNumber++;
            console.log(quizNumber);
            const nextQuiz = document.querySelector(".quiz");
            nextQuiz.innerText = quiz[quizNumber].problem;
        }
    } else {
        alert("틀렸어요! ❌");
    }
}


startButton.addEventListener("click", paintQuiz);



