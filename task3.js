function calculateScore() {
  const form = document.getElementById('quizForm');
  const formData = new FormData(form);
  let score = 0;

  for (let [_, value] of formData.entries()) {
    score += parseInt(value);
  }

  const result = document.getElementById('quizResult');
  result.innerText = `🎯 You scored ${score} out of 3!`;
  result.style.display = 'block';
}

function fetchJoke() {
  const jokeDisplay = document.getElementById('jokeDisplay');
  jokeDisplay.innerText = "Fetching a hilarious joke for you... 🤭";

  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      jokeDisplay.innerText = `😂 ${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      jokeDisplay.innerText = "Oops! Couldn't load a joke. Please try again later.";
    });
}


