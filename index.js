const imageMenuBar = document.getElementById("clickable-image")
const hiddenMenuBar = document.getElementById("menu-bar")
imageMenuBar.addEventListener('click',()=>{
    hiddenMenuBar.classList.toggle('shown')
})