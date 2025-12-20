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

const scriptURL = "https://script.google.com/macros/s/AKfycbyKWGmHkj6DA8siQqEnT7djqeKfwLwzbSGuYexHK1uSToR4DyIsX9wbRe5OmdRdjb7oOQ/exec";

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => {
    status.innerText = "Message sent successfully!";
    form.reset();
  })
  .catch(error => {
    status.innerText = "Error sending message!";
    console.error("Error!", error.message);
  });
});


