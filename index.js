const imageMenuBar = document.getElementById("clickable-image");
const hiddenMenuBar = document.getElementById("menu-bar");
const inputEmail = document.querySelector("input");
const emailRegex = /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/;
const suBmit = document.getElementById("donate2");

suBmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(emailRegex.test(inputEmail.value)); 

  // Check if email is empty or doesn't match regex
  if (inputEmail.value === "" || !emailRegex.test(inputEmail.value)) {
    inputEmail.style.outline = "1px solid red"; // Invalid email or empty input
    console.log("1");
  } else {
    inputEmail.style.outline = "none"; // Valid email
    console.log("0");
  }
});

imageMenuBar.addEventListener("click", () => {
  hiddenMenuBar.classList.toggle("shown");
});

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("intro-animation").classList.add("fade-out");
  }, 2000);
});
