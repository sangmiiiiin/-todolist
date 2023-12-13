const images = ["2.jpg", "3.jpg"]

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
document.body.style.backgroundImage = `url(img/${chosenImg})`;
document.body.style.backgroundSize = "100%";
const img = document.querySelector("img");
img.style.width = "100%";



