const backgrounds = [
    "0.png",
    "1.png",
    "2.png",
    "3.png"
];

const todayBg = backgrounds[Math.floor(Math.random()*backgrounds.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${todayBg}`;
bgImage.id = "bg";

document.body.appendChild(bgImage);