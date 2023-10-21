let questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        answer: 2
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["José de Alencar", "Machado de Assis", "Carlos Drummond de Andrade", "Cecília Meireles"],
        answer: 1
    }
];

let currentQuestion = 0;

function displayQuestion() {
    let questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = "";

    let question = questions[currentQuestion];
    let questionElement = document.createElement('h2');
    questionElement.textContent = question.question;
    questionContainer.appendChild(questionElement);

    for (let i = 0; i < question.options.length; i++) {
        let option = document.createElement('div');
        option.textContent = question.options[i];
        option.className = "option";
        option.onclick = function() {
            if (i === question.answer) {
                alert("Correto!");
            } else {
                alert("Errado!");
            }
            nextQuestion();
        };
        questionContainer.appendChild(option);
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz Finalizado!");
        currentQuestion = 0;
        displayQuestion();
    }
}

displayQuestion();
