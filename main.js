// === Typing Effect (No library needed) ===
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".text");
  const roles = [
    "Fullstack Developer",
    "Cloud Engineering Trainee",
    "AI/ML Intern"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = roles[roleIndex];
    const currentDisplay = currentText.substring(0, charIndex);
    textElement.textContent = currentDisplay;

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        roleIndex = (roleIndex + 1) % roles.length;
      }
      setTimeout(typeEffect, 1000);
    }
  }

  typeEffect();
});

// === Dark Mode Toggle ===
const toggleButton = document.createElement("button");
toggleButton.textContent = "🌙";
toggleButton.style.position = "fixed";
toggleButton.style.top = "20px";
toggleButton.style.right = "20px";
toggleButton.style.zIndex = "1000";
toggleButton.style.padding = "10px";
toggleButton.style.fontSize = "20px";
toggleButton.style.borderRadius = "50%";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

let darkMode = true;
toggleButton.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("light-mode", !darkMode);
  toggleButton.textContent = darkMode ? "🌙" : "☀️";
});

// === Scroll-to-top Button ===
const scrollBtn = document.querySelector(".top");
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// === Scroll Reveal Animation ===
const sections = document.querySelectorAll("section, .container1");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease-out";
  observer.observe(section);
});
