const navEl = document.querySelector("#nav");
const dropdownEl = document.querySelector(".drop-down");
const containerEl = document.querySelector(".container");
const homeEl = document.querySelector(".home")
const gameEl = document.querySelector(".game")
const productEl = document.querySelector(".product")

function nvdia() {

    navEl.addEventListener("mouseover", () => {
        navEl.style.height = "100px";
    });

    navEl.addEventListener("mouseout", () => {
        navEl.style.height = "70px";
    });

    containerEl.addEventListener("click", () => {
        document.querySelector(".drop-content").style.display = "none";
    });

    dropdownEl.addEventListener("click", () => {
        document.querySelector(".drop-content").style.display = "block";
    });

    window.addEventListener("scroll", () => {
        if (scrollY > gameEl.offsetTop - navEl.offsetHeight - 200) {
            gameEl.style.opacity = "1";
        }
        if (scrollY > productEl.offsetTop - navEl.offsetHeight - 200) {
            productEl.style.opacity = "1";
        }
    })


}



window.onload = nvdia();

homeEl.style.opacity = "1";