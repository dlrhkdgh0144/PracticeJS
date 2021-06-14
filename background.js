const images = [
    "0.jpg","1.jpg","2.jpg","3.jpg"
];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundImage = `url(img/${chosenImage})`;
//document.body.style.backgroundSize = "1000px";
document.body.style.backgroundSize = "cover";