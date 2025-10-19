// Buat balon lebih ramai
const balloonsContainer = document.querySelector(".balloons");

for (let i = 0; i < 50; i++) { // makin banyak biar rame
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Warna balon lembut pastel
  const colors = ["#ff8fab", "#ffcad4", "#ffb3c6", "#ffc8dd", "#fda4ba", "#fca5a5", "#fde68a"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  // Posisi dan ukuran acak
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.width = 30 + Math.random() * 30 + "px";
  balloon.style.height = 40 + Math.random() * 40 + "px";

  // Kecepatan dan delay acak
  balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
  balloon.style.animationDelay = Math.random() * 5 + "s";

  balloonsContainer.appendChild(balloon);
}
