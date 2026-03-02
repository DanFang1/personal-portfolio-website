const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
const particles = [];
const particleCount = 100;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function playNameCardAnimation() {
  const card = document.getElementById('name-card');
  if (!card) return;
  card.classList.remove('animate-name-card');
  card.offsetWidth;
  card.classList.add('animate-name-card');
}

function slideBackNameCard() {
  const card = document.getElementById('name-card');
  if (!card) return;
  card.classList.remove('animate-name-card');
  card.offsetWidth;
  card.style.clipPath = 'inset(0 0 0 0)';
  card.classList.add('slide-back');
}

function animateWideCardsSequential(stepMs) {
  const wideCards = Array.from(document.querySelectorAll('.wide-card'));
  wideCards.forEach((card, idx) => {
    const delay = stepMs * (idx + 1);
    setTimeout(() => {
      if (!card) return;
      card.classList.add('animate-name-card');
    }, delay);
  });
}

function slideBackWideCards() {
  const wideCards = Array.from(document.querySelectorAll('.wide-card'));
  wideCards.forEach((card) => {
    card.classList.remove('animate-name-card');
    card.style.clipPath = 'inset(0 0 0 0)';
    card.classList.add('slide-back');
  });
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.phase = Math.random() * Math.PI * 2;
  }

  draw(ctx) {
    const opacity = 0.2 + 0.6 * (Math.sin(this.phase) + 1) / 2;
    ctx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';
    const half = this.size / 2;
    ctx.fillRect(this.x - half, this.y - half, this.size, this.size);
  }
}

function createParticles() {
  particles.length = 0;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const width = canvas.width;
  const height = canvas.height;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.speedX;
    p.y += p.speedY;
    p.phase += 0.03;
    if (p.x < 0 || p.x > width) p.speedX = -p.speedX;
    if (p.y < 0 || p.y > height) p.speedY = -p.speedY;
    p.draw(ctx);
  }

  requestAnimationFrame(draw);
}

window.addEventListener('resize', function () {
  resizeCanvas();
  createParticles();
});

window.addEventListener('DOMContentLoaded', function () {
  resizeCanvas();
  createParticles();
  draw();

  playNameCardAnimation();

  animateWideCardsSequential(700);

  const nameCard = document.getElementById('name-card');
  if (nameCard) {
    nameCard.addEventListener('click', playNameCardAnimation);
  }

  /* Animation for resume card after clicking resume */
  const resumeCard = document.getElementById('wide-card-1');
  resumeCard.addEventListener('click', () => {
    if (nameCard) {
      nameCard.style.clipPath = 'inset(0 0 0 0)';
      nameCard.style.visibility = 'visible';
      nameCard.classList.add('slide-away');
      nameCard.classList.remove('animate-name-card');
    }
    for (let i = 1; i <= 4; i++) {
      const cardEl = document.getElementById(`wide-card-${i}`);
      if (!cardEl) continue;
      cardEl.style.clipPath = 'inset(0 0 0 0)';
      cardEl.style.visibility = 'visible';
      cardEl.classList.add('slide-away');
      cardEl.classList.remove('animate-name-card');
    }
    setTimeout(() => {
      for (let i = 1; i <= 4; i++) {
        const wideCardRemoval = document.getElementById(`wide-card-${i}`);
        if (!wideCardRemoval) continue;
        wideCardRemoval.style.display = 'none';
      }
      const nameCardRemoval = document.getElementById('name-card');
      if (nameCardRemoval) {
        nameCardRemoval.style.display = 'none';
      }

      const backButton = document.getElementById('back-button');
      if (backButton) {
        backButton.classList.remove('back-button-slide');
        backButton.offsetWidth;
        backButton.style.display = 'block';
        backButton.classList.add('back-button-slide');

        backButton.addEventListener('animationend', () => {
            backButton.classList.remove('back-button-slide');
          }, { once: true });
        }
    }, 950);
    setTimeout(() => {
      const resumeCard = document.getElementById('resume-card');
      if (resumeCard) {
        resumeCard.style.display = 'flex';
        resumeCard.style.clipPath = 'inset(0 0 0 0)';
        resumeCard.style.visibility = 'visible';
        resumeCard.classList.add('slide-down');
      }
    }, 950);
  });

  /* Animation for projects card after clicking projects */
  const projectsCard = document.getElementById('wide-card-2');
  projectsCard.addEventListener('click', () => {
    if (nameCard) {
      nameCard.style.clipPath = 'inset(0 0 0 0)';
      nameCard.style.visibility = 'visible';
      nameCard.classList.add('slide-away');
      nameCard.classList.remove('animate-name-card');
    }
    for (let i = 1; i <= 4; i++) {
      const cardEl = document.getElementById(`wide-card-${i}`);
      if (!cardEl) continue;
      cardEl.style.clipPath = 'inset(0 0 0 0)';
      cardEl.style.visibility = 'visible';
      cardEl.classList.add('slide-away');
      cardEl.classList.remove('animate-name-card');
    }
    setTimeout(() => {
      for (let i = 1; i <= 4; i++) {
        const wideCardRemoval = document.getElementById(`wide-card-${i}`);
        if (!wideCardRemoval) continue;
        wideCardRemoval.style.display = 'none';
      }
      const nameCardRemoval = document.getElementById('name-card');
      if (nameCardRemoval) {
        nameCardRemoval.style.display = 'none';
      }

      const backButton = document.getElementById('back-button');
      if (backButton) {
        backButton.classList.remove('back-button-slide');
        backButton.offsetWidth;
        backButton.style.display = 'block';
        backButton.classList.add('back-button-slide');

        backButton.addEventListener('animationend', () => {
            backButton.classList.remove('back-button-slide');
          }, { once: true });
        }
    }, 950);
    setTimeout(() => {
      const getProjectsCard = document.getElementById('projects-card');
      if (getProjectsCard) {
        getProjectsCard.style.display = 'flex';
        getProjectsCard.style.clipPath = 'inset(0 0 0 0)';
        getProjectsCard.style.visibility = 'visible';
        getProjectsCard.classList.add('slide-down');
      }
    }, 950);
  });

  /* Animation for experiences card after clicking experiences */
  const experiencesCard = document.getElementById('wide-card-3');
  experiencesCard.addEventListener('click', () => {
    if (nameCard) {
      nameCard.style.clipPath = 'inset(0 0 0 0)';
      nameCard.style.visibility = 'visible';
      nameCard.classList.add('slide-away');
      nameCard.classList.remove('animate-name-card');
    }
    for (let i = 1; i <= 4; i++) {
      const cardEl = document.getElementById(`wide-card-${i}`);
      if (!cardEl) continue;
      cardEl.style.clipPath = 'inset(0 0 0 0)';
      cardEl.style.visibility = 'visible';
      cardEl.classList.add('slide-away');
      cardEl.classList.remove('animate-name-card');
    }
    setTimeout(() => {
      for (let i = 1; i <= 4; i++) {
        const wideCardRemoval = document.getElementById(`wide-card-${i}`);
        if (!wideCardRemoval) continue;
        wideCardRemoval.style.display = 'none';
      }
      const nameCardRemoval = document.getElementById('name-card');
      if (nameCardRemoval) {
        nameCardRemoval.style.display = 'none';
      }

      const backButton = document.getElementById('back-button');
      if (backButton) {
        backButton.classList.remove('back-button-slide');
        backButton.offsetWidth;
        backButton.style.display = 'block';
        backButton.classList.add('back-button-slide');

        backButton.addEventListener('animationend', () => {
            backButton.classList.remove('back-button-slide');
          }, { once: true });
        }
    }, 950);
    setTimeout(() => {
      const getExperiencesCard = document.getElementById('experiences-card');
      if (getExperiencesCard) {
        getExperiencesCard.style.display = 'flex';
        getExperiencesCard.style.clipPath = 'inset(0 0 0 0)';
        getExperiencesCard.style.visibility = 'visible';
        getExperiencesCard.classList.add('slide-down');
      }
    }, 950);
  });

  /* Animation for contacts card after clicking contacts */
  const contactsCard = document.getElementById('wide-card-4');
  contactsCard.addEventListener('click', () => {
    if (nameCard) {
      nameCard.style.clipPath = 'inset(0 0 0 0)';
      nameCard.style.visibility = 'visible';
      nameCard.classList.add('slide-away');
      nameCard.classList.remove('animate-name-card');
    }
    for (let i = 1; i <= 4; i++) {
      const cardEl = document.getElementById(`wide-card-${i}`);
      if (!cardEl) continue;
      cardEl.style.clipPath = 'inset(0 0 0 0)';
      cardEl.style.visibility = 'visible';
      cardEl.classList.add('slide-away');
      cardEl.classList.remove('animate-name-card');
    }
    setTimeout(() => {
      for (let i = 1; i <= 4; i++) {
        const wideCardRemoval = document.getElementById(`wide-card-${i}`);
        if (!wideCardRemoval) continue;
        wideCardRemoval.style.display = 'none';
      }
      const nameCardRemoval = document.getElementById('name-card');
      if (nameCardRemoval) {
        nameCardRemoval.style.display = 'none';
      }

      const backButton = document.getElementById('back-button');
      if (backButton) {
        backButton.classList.remove('back-button-slide');
        backButton.offsetWidth;
        backButton.style.display = 'block';
        backButton.classList.add('back-button-slide');

        backButton.addEventListener('animationend', () => {
            backButton.classList.remove('back-button-slide');
          }, { once: true });
        }
    }, 950);
    setTimeout(() => {
      const getContactsCard = document.getElementById('contacts-card');
      if (getContactsCard) {
        getContactsCard.style.display = 'flex';
        getContactsCard.style.clipPath = 'inset(0 0 0 0)';
        getContactsCard.style.visibility = 'visible';
        getContactsCard.classList.add('slide-down');
      }
    }, 950);
  });
  
  /* Back button animation and functionality */
  const backButton = document.getElementById('back-button');
  if (backButton) {

    backButton.addEventListener('click', () => {
      backButton.style.display = 'none';
      backButton.classList.remove('back-button-slide');

      const removeResumeCard = document.getElementById('resume-card');
      if (removeResumeCard) {
        removeResumeCard.classList.remove('slide-down');
        removeResumeCard.style.visibility = 'hidden';
        removeResumeCard.style.display = 'none';
        removeResumeCard.style.clipPath = 'inset(0 100% 0 0)';
      }

      const removeProjectsCard = document.getElementById('projects-card');
      if (removeProjectsCard) {
        removeProjectsCard.classList.remove('slide-down');
        removeProjectsCard.style.visibility = 'hidden';
        removeProjectsCard.style.display = 'none';
        removeProjectsCard.style.clipPath = 'inset(0 100% 0 0)';
      }

      const removeExperiencesCard = document.getElementById('experiences-card');
      if (removeExperiencesCard) {
        removeExperiencesCard.classList.remove('slide-down');
        removeExperiencesCard.style.visibility = 'hidden';
        removeExperiencesCard.style.display = 'none';
        removeExperiencesCard.style.clipPath = 'inset(0 100% 0 0)';
      }

      const removeContactsCard = document.getElementById('contacts-card');
      if (removeContactsCard) {
        removeContactsCard.classList.remove('slide-down');
        removeContactsCard.style.visibility = 'hidden';
        removeContactsCard.style.display = 'none';
        removeContactsCard.style.clipPath = 'inset(0 100% 0 0)';

      }

      const nameCardEl = document.getElementById('name-card');
      if (nameCardEl) {
        nameCardEl.style.clipPath = 'inset(0 100% 0 0)';
        nameCardEl.style.display = '';
        nameCardEl.style.visibility = 'visible';
        nameCardEl.classList.remove('slide-away', 'remove-all-cards');
      }

      for (let i = 1; i <= 4; i++) {
        const cardEl = document.getElementById(`wide-card-${i}`);
        if (!cardEl) continue;
        cardEl.style.clipPath = 'inset(0 100% 0 0)';
        cardEl.style.display = '';
        cardEl.style.visibility = 'visible';
        cardEl.classList.remove('slide-away', 'remove-all-cards', 'animate-name-card');
      }

      setTimeout(() => {
        slideBackNameCard();
        slideBackWideCards();
        setTimeout(() => {
          if (nameCardEl) nameCardEl.classList.remove('slide-back');
          document.querySelectorAll('.wide-card').forEach(c => c.classList.remove('slide-back'));
        }, 750);
      }, 20);
    }); 
  }     
});  