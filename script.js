const words = ["Computer Engineer ", "Frontend Developer ", ];
    let wordIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const speed = 150;

    function typeEffect() {
      const fullText = words[wordIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex--);
      } else {
        currentText = fullText.substring(0, charIndex++);
      }

      document.getElementById("typing").textContent = currentText;

      if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500); // pause before typing next word
      } else {
        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
      }
    }

    typeEffect();