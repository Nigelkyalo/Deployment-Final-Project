// Toggle mobile menu example (future expansion)
console.log("JS Loaded");

// Contact form validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    e.preventDefault();
  } else {
    alert("Message sent successfully!");
  }
});
