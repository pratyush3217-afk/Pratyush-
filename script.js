const scriptURL = "PASTE_YOUR_WEB_APP_URL_HERE";

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
