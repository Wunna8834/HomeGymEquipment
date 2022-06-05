const btns = document.querySelectorAll(".tab-btn");
const products = document.querySelector(".products");
const images = document.querySelectorAll(".img-wrapper");
products.addEventListener('click', function(e) {
    const id = e.target.dataset.id;

    if(id) {
        btns.forEach(function(btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        images.forEach(function(image) {
            image.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})