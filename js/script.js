document.addEventListener("DOMContentLoaded", function () {
  const squareDOM = document.getElementById("square");

  const generateHexColor = () => {
    const randomColor = Math.random().toString(16).slice(2, 8);

    squareDOM.style.backgroundColor = `#${randomColor}`;
  };
  const changePosition = () => {
    const randomTop = Math.floor(Math.random() * 400);
    const randomLeft = Math.floor(Math.random() * 750);
    squareDOM.style.top = `${randomTop}px`;
    squareDOM.style.left = `${randomLeft}px`;
  };


  changePosition();
  generateHexColor();
  shoot();
  setInterval(generateHexColor, 1000);
  setInterval(changePosition, 1000);

});



document.getElementById("square").addEventListener("click", shoot);
function shoot(){
    document.getElementById("square").style.borderRadius= "50px";

    setTimeout(() => {
        document.getElementById("square").style.borderRadius= "0";
      }, 400);
}
