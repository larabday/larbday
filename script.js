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

    // Calculate time passed since February 15, 2024
    const now2 = new Date();
    const past = new Date(2024, 1, 15); // Month is zero-based: 1 = February
    const diff2 = now2 - past;
    const daysPassed = Math.floor(diff2 / (1000 * 60 * 60 * 24));
    const hoursPassed = Math.floor((diff2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesPassed = Math.floor((diff2 % (1000 * 60 * 60)) / (1000 * 60));
    const secondsPassed = Math.floor((diff2 % (1000 * 60)) / 1000);
    const timeMessage = `\n\nWe zijn al ${daysPassed} dagen, ${hoursPassed} uur, ${minutesPassed} minuten, ${secondsPassed} seconden. samen en dat voelde als zon korte tijd maar ook tegelijk voelt het alsof ik jou al supeeer lang ken je alles kan vertellen hehe, waar ik heel dankbaar voor ben, lara jij bent het meest dierbare persoon in de wereld voor mij en dat zal altijd zo blijven. Ik beloof op jou en de meisjes dat ik er altijd voor je zal zijn en altijd meer van jou zal houden. Ik hou oprecht zo ongelofelijk veel van jou dat is niet normaal elke keer dat ik je zie krijg ik weer vlindertjes in mijn buik en voordat ik de deur van jou huis open doe om je weer te zien vind ik het elke keer spannend, omdat ik jou dan weer mag zien`;

    const message = "Fijne verjaardag!!!, normaal schjrijf ik meestal brieven voor jou maar ik dacht deze keer doe ik het wat anders, ik moet je wat vertellen lara nu je oud genog bent: ik hou meer van jou en ja dat is een feit. Ik ben supeeeeeeeeeeeeeer trots op jou schatje en hoop dat je een hele leuke dag gaat hebben vandaag. Ik hoop ook dat je mijn cadeautjes leuk gaat vinden maar ik denk het wel (hoop ik) je moet ze wel openen met mij erbij hoor anders is niet leuk hahaha, de kindjes hebben ook meegeholpen met kado's uitkiezen en deze website maken." + timeMessage + '\n\nDe dagen zonder jou voelen als een eeuwigheid en de dagen met jou voelen als een paar uur, wat goed is maar ook weer jammer want ik wil altijd met jou kunnen zijn maar ja ik weet dat ik jou en lena ook wat alone time moet geven :(. \n\nIn ieder geval ik wil gewoon zeggen dat jij mij oneindig dierbaar bent en ik nooit zonder jou zou kunnnen leven.. fijne 19e verjaardag en ik hoop dat ik nog veel meer websites voor jou verjaardagen mag maken.';

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
