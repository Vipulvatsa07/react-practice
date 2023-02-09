
const form = document.getElementById("login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let users = [];
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  const existingUser = users.find(user => user.email === email && user.password === password);
  if (!existingUser) {
    alert("Invalid email or password. Please try again.");
    return;
  }

  localStorage.setItem("loggedIn", JSON.stringify(email));
  alert("Login successful!");

  // You can redirect the user to another page here, if desired
  window.location.href="homepage.html"
});
