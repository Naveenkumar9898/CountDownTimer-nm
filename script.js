
  
  // Christmas Countdown
  const daysElem = document.getElementById("days");
  const hoursElem = document.getElementById("hours");
  const minutesElem = document.getElementById("minutes");
  const secondsElem = document.getElementById("seconds");
  
  function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25
    if (now > christmas) {
      christmas.setFullYear(christmas.getFullYear() + 1); // Next year
    }
  
    const diff = christmas - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    daysElem.textContent = days.toString().padStart(2, "0" );
    hoursElem.textContent = hours.toString().padStart(2, "0");
    minutesElem.textContent = minutes.toString().padStart(2, "0");
    secondsElem.textContent = seconds.toString().padStart(2, "0");
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
  (async () => {
    await loadFireworksPreset(tsParticles);
  
    await tsParticles.load({
      id: "tsparticles",
      options: {
        preset: "fireworks",
      },
    });
  })();
