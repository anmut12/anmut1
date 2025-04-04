const card = document.getElementById('card');
    const toBack = document.getElementById('toBack');
    const toFront = document.getElementById('toFront');
    const flipSound = document.getElementById('flipSound');

    toBack.addEventListener('click', () => {
      card.classList.add('flipped');
      flipSound.play();
    });

    toFront.addEventListener('click', () => {
      card.classList.remove('flipped');
      flipSound.play();
    });