const form = document.getElementById("signup-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const password = document.getElementById("password").value;

  let users = [];
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert("Email is already in use. Please enter a different email.");
    return;
  }

  const user = { email, name, gender, password };
  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign up successful!");
  window.location.href = "login.html";
});

const login=()=>{
    window.location.href="login.html"
}