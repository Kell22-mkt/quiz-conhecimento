const quizData = [
    {
        question: "Qual é a capital da França?",
        a: "Madrid",
        b: "Berlim",
        c: "Paris",
        d: "Lisboa",
        correct: "c"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        a: "William Shakespeare",
        b: "Miguel de Cervantes",
        c: "J.K. Rowling",
        d: "Ernest Hemingway",
        correct: "b"
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        a: "Terra",
        b: "Marte",
        c: "Júpiter",
        d: "Saturno",
        correct: "c"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionEl = document.getElementById("quiz");
    const questionData = quizData[currentQuestion];
    questionEl.innerHTML = `
        <h2>${questionData.question}</h2>
        <input type="radio" name="answer" id="a" value="a">
        <label for="a">${questionData.a}</label><br>
        <input type="radio" name="answer" id="b" value="b">
        <label for="b">${questionData.b}</label><br>
        <input type="radio" name="answer" id="c" value="c">
        <label for="c">${questionData.c}</label><br>
        <input type="radio" name="answer" id="d" value="d">
        <label for="d">${questionData.d}</label>
    `;
}

function nextQuestion() {
    const answerEls = document.querySelectorAll('input[name="answer"]');
    let answer;
    for (const el of answerEls) {
        if (el.checked) {
            answer = el.value;
        }
    }

    if (answer === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        document.getElementById("next-button").style.display = "none";
        document.getElementById("result-button").style.display = "inline-block";
    }
}

function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

window.onload = startQuiz;
