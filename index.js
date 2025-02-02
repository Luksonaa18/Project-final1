// lukaZH შევქმენი კლიკის ივენთი რომელიც ჩამოშლის მენიუბარს
const imageMenuBar = document.getElementById("clickable-image")
const hiddenMenuBar = document.getElementById("menu-bar")
imageMenuBar.addEventListener('click',()=>{
    hiddenMenuBar.classList.toggle('shown')
})
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('intro-animation').classList.add('fade-out');
    }, 2000);
  });