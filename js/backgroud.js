const BG_IMG = "bgImg";

const images = [];

for (let i = 0; i < 7; i++) {
  images.push(`${i}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add(BG_IMG);
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
