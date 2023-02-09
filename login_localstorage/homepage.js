// //TO REMOVE THE USER
//    const display=document.getElementById("display")
//    const loggedemail = JSON.parse(localStorage.getItem("users"));
//    console.log(loggedemail)
//    if(loggedemail)
//    {
//     display.innerHTML=loggedemail[0].email
//    }

// const logoutButton = document.getElementById("logout-button");

// logoutButton.addEventListener("click", () => {
//   const email = localStorage.getItem("users");
//   if (!email) {
//     return;
//   }

//   let users = [];
//   if (localStorage.getItem("users")) {
//     users = JSON.parse(localStorage.getItem("users"));
//   }

//   const updatedUsers = users.filter(user => user.email !== email);
//   localStorage.setItem("users", JSON.stringify(updatedUsers));
//   localStorage.removeItem("users");
//   // Redirect the user back to the login page
//   alert("back to login page")
//   window.location.href="signup.html"
// });




//TO REMOVE ONLY LOGGEDIN USER
// --------------------------------------------------------------------
const displaySpan = document.getElementById("display");
  const loggedInEmail = localStorage.getItem("loggedIn");
  if (loggedInEmail) {
    displaySpan.innerHTML = loggedInEmail;
  }
const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
   // Redirect the user back to the login page
  alert("back to login page")
  window.location.href="login.html"
});