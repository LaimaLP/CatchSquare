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
  setInterval(generateHexColor, 1000);
  setInterval(changePosition, 1000);

});
