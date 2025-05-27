  const card = document.getElementById('card');
  const toBack = document.getElementById('toBack');
  const toFront = document.getElementById('toFront');
  const flipSound = document.getElementById('flipSound');

  const text = `A highly motivated and multilingual professional with a Bachelor’s degree in Electromechanical Engineering and
extensive training in sales, marketing, and technology. Certiﬁed in numerous professional development programs.
Proven experience in both professional and volunteer roles across diverse industries. Guided by the principles of the
5Cs ( Curious, Collaborative, Committed, Courageous, and Cheerful) I strive to create value, embrace challenges, and
lead meaningful change. Passionate about building a dynamic and purpose-driven career in Engineering , Sales and
Marketing, with a proactive approach to learning and leadership.
. Fluent with English and Amharic`;
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
