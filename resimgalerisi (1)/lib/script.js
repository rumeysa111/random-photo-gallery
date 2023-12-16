const imageUrls = [
  "https://source.unsplash.com/random/300x300",
  "https://source.unsplash.com/random/300x301",
  "https://source.unsplash.com/random/300x302",
  "https://source.unsplash.com/random/300x303",
  "https://source.unsplash.com/random/300x304",
  "https://source.unsplash.com/random/300x305",
  "https://source.unsplash.com/random/300x306",
  "https://source.unsplash.com/random/300x307",
  "https://source.unsplash.com/random/300x308",
  "https://source.unsplash.com/random/300x309",
  "https://source.unsplash.com/random/300x311",
  "https://source.unsplash.com/random/300x312",
  "https://source.unsplash.com/random/300x313",
  "https://source.unsplash.com/random/300x314",
  "https://source.unsplash.com/random/300x315",
];

function getRandomImageUrl() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function refreshPage() {
  location.reload(); // Sayfayı yenile
}
  // Yenilemeden sonra 15 resmi göster
  window.onload = function () {
    const imageContainer = document.getElementById("imageContainer");
    for (let i = 0; i < 15; i++) {
      const newImage = document.createElement("img");
      newImage.src = getRandomImageUrl();
      newImage.width = 300;
      newImage.height = 300;
      imageContainer.appendChild(newImage);
    }
  };

