let hamburgerMenuButton = document.getElementById("hamburger-menu");
let hamburgerMenu = document.getElementsByTagName("nav")
let links = document.getElementById("menu-links");
let main = document.getElementsByTagName("main");

for (let link of links.children) {
    link.addEventListener("click", closeHamburgerMenu)
}

hamburgerMenuButton.addEventListener("click", activateHamburgerMenu)
main[0].addEventListener("click", closeHamburgerMenu)

function activateHamburgerMenu(event) {
    let clickedButton = event.target;

    if (clickedButton.classList.contains("bi-list")) {
        clickedButton.classList.toggle("bi-x-lg");
        links.classList.toggle("hidden");
        hamburgerMenu[0].classList.toggle("bg-sky-800");
        hamburgerMenu[0].classList.toggle("text-zinc-200")
    }
}

function closeHamburgerMenu() {
    if (hamburgerMenuButton.classList.contains("bi-x-lg")) {
        hamburgerMenuButton.classList.toggle("bi-x-lg");
        links.classList.toggle("hidden");
        hamburgerMenu[0].classList.toggle("bg-sky-800");
        hamburgerMenu[0].classList.toggle("text-zinc-200")
    }
}