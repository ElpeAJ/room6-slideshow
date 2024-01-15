const main = document.querySelector("main");
main.style.backgroundImage = `url(${images[0]})`;

function goto() {
  main.style.transition = `red 1.5s linear 0.5s`;
  main.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

leftButton.addEventListener("click", function () {
  goBack();
  goto();
});

rightButton.addEventListener("click", function () {
  goForward();
  goto();
});

// setInterval(function () {
//   goForward();
//   goto();
// }, 1300);
