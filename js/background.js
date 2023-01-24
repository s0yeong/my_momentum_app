const bgImages = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"];
const chosenImage = bgImages[Math.floor(Math.random()*bgImages.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;
document.body.appendChild(bgImage);