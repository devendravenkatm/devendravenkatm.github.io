
window.addEventListener("DOMContentLoaded", function() {
  // Typing animation
  const textToType = "Hi, I am Devendra Venkat. Welcome to my Website.";
  const typingSpeed = 100;
  const typedTextElement = document.getElementById("typed-text");
  let charIndex = 0;

  function typeText() {
    if (charIndex < textToType.length) {
      typedTextElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }

  typeText();

  // Smooth scrolling for anchor links
  document.querySelectorAll("a[href^='#']").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      var href = this.getAttribute("href").substring(1);

      document.getElementById(href).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Scroll-up button functionality
  var scrollUpButton = document.getElementById('scroll-up');
  scrollUpButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

window.addEventListener("DOMContentLoaded", function() {
  // Typing animation
  const textToType = "Hi, I am Devendra Venkat. Welcome to my Website.";
  const typingSpeed = 100;
  const typedTextElement = document.getElementById("typed-text");
  let charIndex = 0;

  function typeText() {
    if (charIndex < textToType.length) {
      typedTextElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }
  typeText();

  // Smooth scrolling for anchor links
  document.querySelectorAll("a[href^='#']").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const href = this.getAttribute("href").substring(1);
      document.getElementById(href).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Scroll-up button functionality
  const scrollUpButton = document.getElementById('scroll-up');
  scrollUpButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Carousel functionality
  let currentIndex = 0;

  function updateCarousel() {
    const carousel = document.querySelector('.carousel-container');
    const cards = document.querySelectorAll('.project-card');
    const cardWidth = cards[0].offsetWidth;

    // Looping behavior: Wrap around when we reach the last card or first card
    if (currentIndex >= cards.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = cards.length - 1;
    }

    // Center the current card
    const offset = -(currentIndex * cardWidth);
    carousel.style.transform = `translateX(${offset}px)`; 

    // Update the active class for the cards
    cards.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  function slideLeft() {
    const cards = document.querySelectorAll('.project-card');
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop to the last card when we go left
    updateCarousel();
  }

  function slideRight() {
    const cards = document.querySelectorAll('.project-card');
    currentIndex = (currentIndex + 1) % cards.length; // Loop to the first card when we go right
    updateCarousel();
  }

  // Attach slide functions to buttons
  document.querySelector(".left-arrow").addEventListener("click", slideLeft);
  document.querySelector(".right-arrow").addEventListener("click", slideRight);

  // Initialize the first card as active
  updateCarousel();
});
