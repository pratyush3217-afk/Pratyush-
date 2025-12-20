const scriptURL = "https://script.google.com/macros/s/AKfycbyKWGmHkj6DA8siQqEnT7djqeKfwLwzbSGuYexHK1uSToR4DyIsX9wbRe5OmdRdjb7oOQ/exec";

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.style.color = "#94a3b8";
  status.innerText = "Sending...";

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then(() => {
      status.style.color = "#22c55e";
      status.innerText = "Message sent successfully!";
      form.reset();
    })
    .catch(() => {
      status.style.color = "#ef4444";
      status.innerText = "Something went wrong. Try again!";
    });
});

