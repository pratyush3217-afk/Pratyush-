// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form feedback (frontend only)
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});
