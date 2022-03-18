const BG_IMG = "bgImg"

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add(BG_IMG);
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage); // body 맨 끝에 생성
// document.body.prepend(bgImage); // body 맨 위에 생성