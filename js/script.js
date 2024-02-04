const formDOM = document.querySelector("form");
const nameBtnDOM = document.querySelector(".nameBtn");
const squareDOM = document.getElementById("square");
const sectionDOM = document.querySelector("section");
const startBtnDOM = document.getElementById("startBtn");
let playerCountDOM = document.getElementById("playerCount");
let opponentCountDOM = document.getElementById("opponentCount");
const countDownDOM = document.getElementById("countDown");
const playerGameInfoDOM = document.querySelectorAll(".playerGameInfo");
const endGameBoardDOM = document.getElementById("endGameBoard");
const restartDOM = document.getElementById("restart");
const resultDOM = document.getElementById("result");

let playerCount = 0;
let opponentCount = 0;
let isHit = false;
let rounds = 5;
let currentRound = 0;
let time = 30;
let timerInterval;

nameBtnDOM.addEventListener("click", function (event) {
  event.preventDefault();
  updatePlayerName();
  squareDOM.style.display = "none";
  sectionDOM.style.display = "flex";
});

startBtnDOM.addEventListener("click", function () {
  startGame();
  squareDOM.style.display = "block";
  startBtnDOM.style.visibility = "hidden";
  countDownDOM.style.opacity = "1";
});

squareDOM.addEventListener("click", function () {
  hitSquare();
});

function updatePlayerName() {
  const inputField = document.getElementById("nameInput");
  const nameDOM = document.getElementById("playerName");

  nameDOM.textContent =
    inputField.value[0].toUpperCase() + inputField.value.slice(1);
  formDOM.classList.add("notShow");
  startBtnDOM.style.visibility = "visible";
  countDownDOM.style.opacity = "1";

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
  let winner = "Ohh, you lost";
  if(playerCount > opponentCount){
     winner = "Congrats, you won!"
  }
  resultDOM.innerText = `Round completed. \n\n You shot ${playerCount} birds, the opponent ${opponentCount}. \n\n ${winner} `;
  sectionDOM.style.display = "none";
  endGameBoardDOM.style.visibility = "visible";
  showCongrats()
}

restartDOM.addEventListener("click", function (event) {
  event.preventDefault();
  endGameBoardDOM.style.visibility = "hidden";
  sectionDOM.style.display = "flex";
  startNextRound();
});

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

  const randomTop = Math.floor(Math.random() * 480);
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
