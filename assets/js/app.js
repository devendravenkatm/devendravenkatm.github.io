window.addEventListener("DOMContentLoaded", function() {
  var imageContainer = document.getElementById('image-container');
  var mainContainer = document.getElementById('main-container');

  setTimeout(function() {
    imageContainer.style.display = 'none';
    mainContainer.style.opacity = '1';
  }, 2000);

  // Typing animation
  const textToType = "Hi, I am Devendra Venkat. Welcome to my portfolio Website.";
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
});
 
