const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Styling Sheet", "Colorful Style Scripts"],
    answer: 1
  },
  {
    question: "Which tag is used for a link in HTML?",
    options: ["<a>", "<link>", "<href>", "<src>"],
    answer: 0
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Mozilla", "Netscape", "Microsoft"],
    answer: 2
  }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;
  selectedOption = null;

  current.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      selectOption(index, btn);
    });
    optionsEl.appendChild(btn);
  });
}

function selectOption(index, button) {
  const allButtons = optionsEl.querySelectorAll("button");
  allButtons.forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
  selectedOption = index;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your score: ${score} / ${quizData.length}`;

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz 🔁";
  restartBtn.className = "next-btn";
  restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    nextBtn.style.display = "inline-block";
    loadQuestion();
    scoreEl.textContent = "";
    restartBtn.remove();
  };
  optionsEl.appendChild(restartBtn);
}

// Joke Section
const jokes = [
  { q: "Why did the scarecrow win an award?", a: "Because he was outstanding in his field." },
  { q: "Why don’t skeletons fight?", a: "They don’t have the guts." },
  { q: "What do you call fake spaghetti?", a: "An impasta." },
  { q: "Why did the math book look sad?", a: "Because it had too many problems." }
];

function getAnotherJoke() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById("joke-q").textContent = joke.q;
  document.getElementById("joke-a").textContent = joke.a;
}

// Initial load
loadQuestion();
