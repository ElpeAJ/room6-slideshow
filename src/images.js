//code for displaying images
const images = [
  "./images/sunflower-lady.jpeg", //0
  "./images/autumn-lady.jpeg", //1
  "./images/swimming-lady.jpeg", //2
  "./images/happy-lady.jpeg", //3
  "./images/lady-dancing.jpeg", //4
  "./images/lady-enjoying.jpeg", //5
  "./images/hiking-lady.jpeg", //6
  "https://source.unsplash.com/", //7
];

let currentImageIndex = 0; //0
let totalImage = images.length; // 8

// looping to go forward and backwards
function goBack() {
  if (currentImageIndex === 0) {
    // is 0 equal to 0?
    currentImageIndex = totalImage - 1; //8 - 1
  } else {
    currentImageIndex -= 1; //1 0  // 2 1
  }
  main.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

function goForward() {
  if (currentImageIndex === totalImage - 1) {
    // is 7 equal to 7?
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }
  main.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// function goBack() {
//   if (currentImageIndex !== 0) {
//     currentImageIndex -= 1; //1 0  // 2 1
//   }
// }

// function goForward() {
//   if (currentImageIndex !== totalImage - 1) {
//     currentImageIndex += 1;
//   }
// }
