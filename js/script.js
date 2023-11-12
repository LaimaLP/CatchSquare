
const formDOM = document.querySelector("form");
const nameBtnDOM = document.querySelector(".nameBtn");
const squareDOM = document.getElementById("square");
const startBtnDOM = document.querySelector(".startBtn");
let playerCountDOM = document.getElementById("playerCount");
let opponentCountDOM = document.getElementById("opponentCount");
const countDownDOM = document.getElementById("countDown");
const playerGameInfoDOM = document.querySelectorAll(".playerGameInfo")
const headerDOM = document.querySelector(".main-header");


let playerCount = 0;
let opponentCount = 0;
let isHit = false;
let time = 30;




nameBtnDOM.addEventListener("click", function (event) {
  event.preventDefault();
const inputField = document.getElementById("nameInput");
const nameDOM = document.getElementById("playerName");



  nameDOM.textContent = inputField.value[0].toUpperCase() + inputField.value.slice(1);
  formDOM.classList.add("notShow");
  startBtnDOM.style.visibility="visible"
 
  playerGameInfoDOM.forEach(element => {
    element.classList.add("showPlayers");
  });
 
});



startBtnDOM.addEventListener("click", function () {
  function countDown() {
    countDownDOM.innerText = time;
  
    if (time === 0) {
      clearInterval(timerInterval);
      alert(`Oops, time out! Your scrore: ${playerCount}:${opponentCount}`);
    } else {
      time--;
    }
  }
  const timerInterval = setInterval(countDown, 1000);

  const generateHexColor = () => {
    const randomColor = Math.random().toString(16).slice(2, 8);
    squareDOM.style.backgroundColor = `#${randomColor}`;
  };

  const changePosition = () => {
    if (isHit === false) {
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
  };
// changePosition()
   setInterval(changePosition, 1000);
});



squareDOM.addEventListener("click", hit);

function hit() {
  playerCount++;
  playerCountDOM.innerText = playerCount;
  // console.log("my", playerCount);
  squareDOM.style.display = "none";
  isHit = true;
}

console.log(playerCount);



