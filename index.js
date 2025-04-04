  const card = document.getElementById('card');
  const toBack = document.getElementById('toBack');
  const toFront = document.getElementById('toFront');
  const flipSound = document.getElementById('flipSound');

  const text = `A person with a Bachelor of science Degree in Electromechanical Engineering and Certified in Different Courses and Activity. Experienced in Engineering jobs, coding and Marketing Both Professionally and non-Professionally. Fluent with English and Amharic`;
  let i = 0;

  function typeWriter() {
    const element = document.getElementById("typewriter");
    element.innerHTML = "";
    i = 0;
    const interval = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
  }

  toBack.addEventListener('click', () => {
    card.classList.add('flipped');
    flipSound.play();
    // confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { y: 0.6 }
    // });
    typeWriter();
  });

  toFront.addEventListener('click', () => {
    card.classList.remove('flipped');
    flipSound.play();
  });