

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage =  images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImg");

console.log(bgImage);

document.body.appendChild(bgImage);