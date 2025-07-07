  const card = document.getElementById('card');
  const toBack = document.getElementById('toBack');
  const toFront = document.getElementById('toFront');
  const flipSound = document.getElementById('flipSound');

  const text = `Dynamic and multilingual professional with a Bachelor’s degree in Electromechanical Engineering and a passion for driving value across engineering, sales, and marketing. I bring hands-on experience from leading roles in the mining, construction, and beverage industries, where I have excelled in sales engineering, customer relationship management, and technical support.

Guided by the 5Cs—Curious, Collaborative, Committed, Courageous, and Cheerful—I thrive on embracing new challenges, building strong client partnerships, and delivering innovative solutions. My career journey includes:

- Sales Engineer at Epiroc & Atlas Copco (HAGBIS Ethiopia), where I manage the full sales cycle for mining and construction equipment, from lead generation to closing, and provide tailored technical consultations.
- Customer Sales Representative at Habesha Brewery S.C., recognized for driving market growth, leading sales teams, and executing brand-building initiatives.
- Technical Internship at Sicher Elevator Co., Ltd., where I developed practical skills in diagnostics, installation, and maintenance of elevator systems.

I am certified in data science, UI/UX design, web development, and prompt engineering, with proficiency in Python, JavaScript, C++, HTML, CSS, and industry-standard tools like CATIA, SolidWorks, and MATLAB. My technical expertise is complemented by advanced digital skills, strong analytical abilities, and a proven track record in project management.

Fluent in Amharic and English, I am committed to continuous learning and meaningful leadership. I aim to contribute to organizations that value innovation, teamwork, and a purpose-driven approach.

Let’s connect to explore opportunities in engineering, technology, or sales where I can help create lasting impact!`;
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
