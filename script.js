
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  const lucide = window.lucide;
  lucide.createIcons();

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      console.log("Mobile menu toggled");

      const icon = mobileMenuButton.querySelector("i");
      if (icon && mobileMenu.classList.contains("active")) {
        icon.setAttribute("data-lucide", "x");
        lucide.createIcons();
      }
    });
  }

  // Allow native navigation for nav links
  const navButtons = document.querySelectorAll(".nav-link");
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(`Navigating to ${button.href}`);
    });
  });

  // Star rating hover effect
  const stars = document.querySelectorAll(".stars i");
  stars.forEach((star) => {
    star.addEventListener("mouseenter", () => {
      star.style.transform = "scale(1.2)";
    });
    star.addEventListener("mouseleave", () => {
      star.style.transform = "scale(1)";
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        console.log(`Scrolled to: ${targetId}`);
      }
    });
  });

  // Add fade-in animation to sections on scroll
  const sections = document.querySelectorAll("section");
  const fadeInOnScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("fade-in");
      }
    });
  };
  fadeInOnScroll();
  window.addEventListener("scroll", fadeInOnScroll);

  console.log("Essential button handlers initialized");
});
