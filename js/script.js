document.addEventListener("DOMContentLoaded", function () {
  const squareDOM = document.getElementById("square");

  const generateHexColor = () => {
    const randomColor = Math.random().toString(16).slice(2, 8);

    squareDOM.style.backgroundColor = `#${randomColor}`;
  };
  const changePosition = () => {
    if(isHit===false){
      opponentCount++
    }
    isHit=false;
    opponentCountDOM.innerText = opponentCount;

    console.log("opp:",opponentCount)
    const randomTop = Math.floor(Math.random() * 400);
    const randomLeft = Math.floor(Math.random() * 750);
    squareDOM.style.top = `${randomTop}px`;
    squareDOM.style.left = `${randomLeft}px`;
    document.getElementById("square").style.display= "block"
generateHexColor();
  };

  changePosition();
  setInterval(changePosition, 2000);

});


const nameDOM = document.getElementById("playerName");


let playerCountDOM = document.getElementById("playerCount")
let opponentCountDOM = document.getElementById("opponentCount")
let playerCount = 0;
let opponentCount = 0;
let isHit = false;
document.getElementById("square").addEventListener("click", hit);

function hit(){
    playerCount++;
    playerCountDOM.innerText = playerCount;
    console.log("my",playerCount)
    document.getElementById("square").style.display= "none"
    isHit=true;
    
}


console.log(playerCount)

  let time = 30;
  const countDownDOM = document.getElementById('countDown');

  function countDown() {
    
    countDownDOM.innerText = time;

    
    if (time === 0) {
      clearInterval(timerInterval);
      alert("Oops, time out! ");
    } else {
      time--;
    }
  }
  // const timerInterval = setInterval(countDown, 1000);







  