// lukaZH შევქმენი კლიკის ივენთი რომელიც ჩამოშლის მენიუბარს
const imageMenuBar = document.getElementById("clickable-image");
const hiddenMenuBar = document.getElementById("menu-bar");
const inputEmail = document.querySelector('input')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const suBmit = document.getElementById("donate2")

suBmit.addEventListener('click',(e)=>{
e.preventDefault()
 if (inputEmail.value = "") {
  inputEmail.style.outline = "1px solid red"
 }else{
  inputEmail.style.outline = "none"
 }
 console.log(emailRegex.test(inputEmail))
})
imageMenuBar.addEventListener("click", () => {
  hiddenMenuBar.classList.toggle("shown");
});
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("intro-animation").classList.add("fade-out");
  }, 2000);
});

