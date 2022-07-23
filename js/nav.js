const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navSection = document.querySelector(".main-section-A")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navSection.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navSection.classList.remove("active");
}))