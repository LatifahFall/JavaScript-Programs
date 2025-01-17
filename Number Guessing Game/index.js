//NUMBER GUESSING GAME 

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

// DOM Elements
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

submitGuess.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (isNaN(guess) || guess === 0) {
    feedback.textContent = "🧐 Please enter a valid number!";
    feedback.className = "incorrect";
  } else if (guess < minNum || guess > maxNum) {
    feedback.textContent = `🙅‍♀️ Your guess is out of range! Guess between ${minNum} and ${maxNum}.`;
    feedback.className = "incorrect";
  } else {
    attempts++;
    if (guess < answer) {
      feedback.textContent = "📉 Too low! Try again!";
      feedback.className = "hint";
    } else if (guess > answer) {
      feedback.textContent = "📈 Too high! Try again!";
      feedback.className = "hint";
    } else {
      feedback.textContent = `🎉 Correct! The answer was ${answer}! You guessed it in ${attempts} attempts! 🏆`;
      feedback.className = "correct";
      guessInput.disabled = true;
      submitGuess.disabled = true;
    }
  }

  attemptsDisplay.textContent = `Attempts: ${attempts} 🕵️`;
});
