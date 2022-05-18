let hamburgerMenuButton = document.getElementById("hamburger-menu");
let hamburgerMenu = document.getElementById("menu");
let links = document.getElementById("menu-links");
let main = document.getElementsByTagName("main");

console.log(links.children)

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
        hamburgerMenu.classList.toggle("bg-softWhite");
        hamburgerMenuButton.classList.toggle("text-softWhite");
        hamburgerMenuButton.classList.toggle("text-black");
    }
}

function closeHamburgerMenu() {
    if (hamburgerMenuButton.classList.contains("bi-x-lg")) {
        hamburgerMenuButton.classList.toggle("bi-x-lg");
        links.classList.toggle("hidden");
        hamburgerMenu.classList.toggle("bg-softWhite");
        hamburgerMenuButton.classList.toggle("text-softWhite");
        hamburgerMenuButton.classList.toggle("text-black");
    }
}