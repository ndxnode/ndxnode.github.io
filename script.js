document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to sections on scroll
  const sections = document.querySelectorAll("section");

  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  sections.forEach((section) => {
    section.classList.add("hidden");
    fadeInObserver.observe(section);
  });

  // Add theme toggle functionality
  const createThemeToggle = () => {
    const header = document.querySelector("header .container");

    // Create toggle button
    const themeToggle = document.createElement("button");
    themeToggle.classList.add("theme-toggle");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute("aria-label", "Toggle dark/light mode");

    // Add toggle button to header
    header.appendChild(themeToggle);

    // Add click event
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      // Update icon based on current theme
      if (document.body.classList.contains("light-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });
  };

  createThemeToggle();
});
