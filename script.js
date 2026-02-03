const music = document.getElementById("music");
const message = document.getElementById("message");

function startMusic() {
  if (music.paused) {
    music.play().catch(() => {});
  }
}

document.getElementById("cakeBtn").addEventListener("click", () => {
  startMusic();
  message.textContent =
    "🎂 Cake cut successfully! Calories are officially cancelled today 😄🍰";
});

document.getElementById("giftBtn").addEventListener("click", () => {
  startMusic();
  message.textContent =
    "🎁 Surprise! Unlimited happiness, laughter & good vibes unlocked 💖✨";
});

document.getElementById("partyBtn").addEventListener("click", () => {
  startMusic();
  message.textContent =
    "🎊 PARTY MODE ON! Confetti in the air, worries nowhere 🥳💃";
});