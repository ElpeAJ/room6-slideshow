const images = [
  "./images/sunflower-lady.jpeg",
  "./images/autumn-lady.jpeg",
  "./images/swimming-lady.jpeg",
  "./images/happy-lady.jpeg",
  "./images/lady-dancing.jpeg",
  "./images/lady-enjoying.jpeg",
  "./images/hiking-lady.jpeg",
  "https://source.unsplash.com/",
];

let currentImageIndex = 0;
let totalImage = images.length;

function goBack() {
  if (currentImageIndex === 0) {
    currentImageIndex = totalImage - 1;
  } else {
    currentImageIndex -= 1;
  }
}
function goForward() {
  if (currentImageIndex === totalImage - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }
}
