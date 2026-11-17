// MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuBtn.textContent = navLinks.classList.contains("open")
    ? "✕"
    : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// REVEAL ELEMENTS ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// CURRENT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// SUBTLE 3D TILT EFFECT
const tiltCard = document.querySelector(".code-window");

if (tiltCard && window.matchMedia("(hover: hover)").matches) {
  tiltCard.addEventListener("mousemove", (event) => {
    const rect = tiltCard.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    tiltCard.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltCard.addEventListener("mouseleave", () => {
    tiltCard.style.transform =
      "rotateY(-9deg) rotateX(5deg)";
  });
}