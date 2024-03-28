const flowerImages = [
    "flower1.png",
    "flower2.png",
    "flower3.png",
];

const today = new Date();
const dayOfYear = today.getFullYear() * 365 + today.getMonth() * 30 + today.getDate();

const selectedFlowerIndex = dayOfYear % flowerImages.length;

const flowerImage = document.getElementById('flower-image');
flowerImage.src = flowerImages[selectedFlowerIndex];
