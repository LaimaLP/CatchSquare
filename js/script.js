const formDOM = document.querySelector("form");
const nameBtnDOM = document.querySelector(".nameBtn");
const squareDOM = document.getElementById("square");
const startBtnDOM = document.querySelector(".startBtn");
let playerCountDOM = document.getElementById("playerCount");
let opponentCountDOM = document.getElementById("opponentCount");
const countDownDOM = document.getElementById("countDown");
const playerGameInfoDOM = document.querySelectorAll(".playerGameInfo");
const headerDOM = document.querySelector(".main-header");
// const playerRoundsCountDOM=document.getElementById(".playerRoundsCount");
// const opponentRoundsCountDOM =document.getElementById(".opponentRoundsCount");

let playerCount = 0;
let opponentCount = 0;
let isHit = false;
let rounds = 10;
let currentRound = 0;
let time = 30;
let timerInterval;
// let playerRoundsCount = 0;
// let opponentRoundsCount = 0;

nameBtnDOM.addEventListener("click", function (event) {
  event.preventDefault();
  updatePlayerName();
  squareDOM.style.display = "none";

});

startBtnDOM.addEventListener("click", function () {
  startGame();
  squareDOM.style.display = "block"
});

squareDOM.addEventListener("click", function () {
  hitSquare();
});

function updatePlayerName() {
  const inputField = document.getElementById("nameInput");
  const nameDOM = document.getElementById("playerName");

  nameDOM.textContent = inputField.value[0].toUpperCase() + inputField.value.slice(1);
  formDOM.classList.add("notShow");
  startBtnDOM.style.visibility = "visible";

  playerGameInfoDOM.forEach((element) => {
    element.classList.add("showPlayers");
  });
}

function startGame() {
  currentRound = 0;
  startNextRound();
}

function startNextRound() {
  clearInterval(timerInterval);
  if (currentRound < rounds) {
    currentRound++;
    playerCount = 0;
    opponentCount = 0;
    updateScoreDisplay();
    startRound();
  } else {
    endGame();
  }
}

function startRound() {
  time = 30;
  updateCountDownDisplay();
  updateScoreDisplay();
  timerInterval = setInterval(updateGame, 1000);
}

function updateGame() {
  countDown();
  changePosition();
}

function countDown() {
  countDownDOM.innerText = time;

  if (time === 0) {
    endRound();
  } else {
    time--;
  }
}

function endRound() {
  clearInterval(timerInterval);
  alert(`Round ${currentRound} completed! Your score: ${playerCount}:${opponentCount}`);

  startNextRound();
}




function endGame() {
  clearInterval(timerInterval);
  alert(`Game over! Your final score: ${playerCount}:${opponentCount}`);
}

function updateCountDownDisplay() {
  countDownDOM.innerText = time;
}

function updateScoreDisplay() {
  playerCountDOM.textContent = playerCount;
  
  opponentCountDOM.innerText = opponentCount;
}


function changePosition() {
  if (!isHit) {
    opponentCount++;
  }
  isHit = false;
  opponentCountDOM.innerText = opponentCount;

  const randomTop = Math.floor(Math.random() * 400);
  const randomLeft = Math.floor(Math.random() * 750);
  squareDOM.style.top = `${randomTop}px`;
  squareDOM.style.left = `${randomLeft}px`;
  squareDOM.style.display = "block";
  generateHexColor();
}

function hitSquare() {
  playerCount++;
  playerCountDOM.innerText = playerCount;
  squareDOM.style.display = "none";
  isHit = true;
}

function generateHexColor() {
  const randomColor = Math.random().toString(16).slice(2, 8);
  squareDOM.style.backgroundColor = `#${randomColor}`;
}









