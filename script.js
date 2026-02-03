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
  document.getElementById("photo").style.display = "block";
  message.textContent =
    "🎁 Surprise! Someone this cute deserves all the happiness today 💖✨";
});

document.getElementById("partyBtn").addEventListener("click", () => {
  startMusic();
  confetti();
  message.textContent =
    "🎊 PARTY MODE ON! Confetti in the air, worries nowhere 🥳💃";
});
.balloons {
  position: fixed;
  bottom: -100px;
  width: 100%;
  pointer-events: none;
}

.balloons span {
  position: absolute;
  font-size: 40px;
  animation: rise 8s linear infinite;
}

.balloons span:nth-child(1) { left: 10%; animation-duration: 7s; }
.balloons span:nth-child(2) { left: 30%; animation-duration: 9s; }
.balloons span:nth-child(3) { left: 50%; animation-duration: 8s; }
.balloons span:nth-child(4) { left: 70%; animation-duration: 10s; }
.balloons span:nth-child(5) { left: 90%; animation-duration: 6s; }

@keyframes rise {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-120vh); opacity: 0; }
    }
function confetti() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.innerText = "🎊";
    c.style.position = "fixed";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-20px";
    c.style.fontSize = "24px";
    c.style.animation = "fall 3s linear";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 3000);
  }
}
