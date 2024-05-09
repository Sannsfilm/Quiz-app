const questions = [
  {
    question: "What is the main component of the atmosphere on Mars?",
    answer: [
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: " Which planet is known for its prominent rings?",
    answer: [
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false },
      { text: "Saturn", correct: true },
      { text: "Mars", correct: false },
    ],
  },
  {
    question:
      "Which planet is known as the 'Evening Star' or 'Morning Star' due to its bright appearance?",
    answer: [
      { text: "Earth", correct: false },
      { text: "Uranus", correct: false },
      { text: "Saturn", correct: false },
      { text: "Venus", correct: true },
    ],
  },
  {
    question: "What is the main component of the atmosphere on Mars?",
    answer: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Carbon dioxide", correct: true },
    ],
  },
  {
    question: "Which of the following planets is closest to the Sun?",
    answer: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },
];

const questionsElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    // menyimpan dataset jika itu correct adalah true
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  // if button clicked, will next button appear dan correct or false answer appear

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

// adding currentQuestionIndex
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// if currentQuestionIndex less than amount of questions

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
