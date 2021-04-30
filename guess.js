let answer = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;
let max = 100;
let min = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess || guess > 100 || guess < 1) {
    document.querySelector(".message").textContent = "Invalid input!";
  } else if (guess > answer) {
    if (score > 1) {
      max = guess;
      document.querySelector(
        ".message"
      ).textContent = `<-- Guessing number between ${min} to ${max} -->`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Sorry, you lose the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < answer) {
    if (score > 1) {
      min = guess;
      document.querySelector(
        ".message"
      ).textContent = `<-- Guessing number between ${min} to ${max} -->`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Sorry, you lose the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess == answer) {
    document.querySelector(".message").textContent =
      "Congratulation, you win!!!";
    document.querySelector(".secret").textContent = "👊";
    document.querySelector("body").style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  answer = Math.trunc(Math.random() * 100) + 1;
  score = 10;
  min = 0;
  max = 100;
  document.querySelector(".guess").textContent = "";
  document.querySelector(".secret").textContent = "?";
  document.querySelector(".message").textContent =
    "<-- Guessing number between 1 to 100 -->";
  document.querySelector(".score").textContent = 10;
  document.querySelector("body").style.backgroundColor = "#222";
});
