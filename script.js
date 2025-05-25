// Element reference
const countdownEl = document.getElementById("countdown");
const fallingContainer = document.getElementById('falling-container');
const imageUrl = 'sunflower.png'; // Ensure this is a small valid image

// Start countdown timer
let countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

function updateCountdown() {
  const now = new Date();
  const target = new Date();
  target.setHours(24, 0, 0, 0); // Set to midnight

  const diff = target - now;

  // Countdown complete
  if (diff <= 0) {
    clearInterval(countdownInterval); // Stop the countdown updates

    const message = "Fijne verjaardag!!!, ik hou meer van jou en ja dat is een feit. Ik ben supeeeeeeeeeeeeeer trots op jou schatje en hoop dat je een hele leuke dag gaat hebben vandaag. Ik hoop ook dat je mijn cadeautjes leuk gaat vinden maar ik denk het wel (hoop ik) je moet ze wel openen met mij erbij hoor anders is niet leuk hahaha, de kindjes hebben ook meegeholpen met kado's uitkiezen en deze website maken.  ";
    countdownEl.innerHTML = "";

    let index = 0;
    const typeInterval = setInterval(() => {
      countdownEl.innerHTML += message.charAt(index);
      index++;
      if (index === message.length) {
        clearInterval(typeInterval);
      }
    }, 100); // Typing speed (ms)

    // Unblur images
    document.querySelectorAll('.blurred-img').forEach(img => {
      img.classList.add('unblurred');
    });

    return;
  }

  // Calculate time remaining
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

// Falling sunflowers animation
function createFallingImage() {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.classList.add('falling-img');

  const size = Math.random() * 40 + 20; // 20px - 60px
  img.style.width = `${size}px`;
  img.style.left = `${Math.random() * 100}%`;

  const duration = Math.random() * 5 + 5; // 5s - 10s
  img.style.animationDuration = `${duration}s`;

  fallingContainer.appendChild(img);

  setTimeout(() => {
    fallingContainer.removeChild(img);
  }, duration * 1000);
}

setInterval(createFallingImage, 300);
