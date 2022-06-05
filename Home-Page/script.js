const menuBar = document.getElementById("menu-bar");
const nav = document.querySelector("nav");
const closeBtn = document.getElementById("close-btn");

//Nav Bar
menuBar.addEventListener('click', () => {
   
    nav.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('show');
})

//Slideshow
let slideIndex = 0;
showSlides();
function showSlides() {
    

    let i;
    let slides = document.querySelectorAll(".slide");
    let dot = document.querySelectorAll(".dot");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    for(i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("active", "");
    }
    dot[slideIndex - 1].classList.add("active");
}

setInterval(showSlides, 2000);