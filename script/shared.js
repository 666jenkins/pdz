export default function menuAnimations() {
    const hamburger = document.querySelector(".hamburger--slider");
    const menu_bar = document.querySelector("nav ul");
    const menu_items = document.querySelectorAll("nav ul li");

    const menuOn = () => {
        menu_bar.style.right = "0";
        menu_bar.style.opacity = "100%";
    }
    const menuOff = () => {
        menu_bar.style.right = "-100%";
        menu_bar.style.opacity = "0%";
    }

    const menuItemSlideIn = () => {
        menu_items.forEach(elem => {
            elem.style.opacity = "100%";
            elem.style.right = "0";
        });
    }
    const menuItemSlideOut = () => {
        menu_items.forEach(elem => {
            elem.style.opacity = "0";
            elem.style.right = "-300px";
        });
    }

    hamburger.onclick = () => {
        if (hamburger.classList.contains("is-active")) {
            hamburger.classList.remove("is-active");
            menuOff();
            menuItemSlideOut();
        } else {
            hamburger.classList.add("is-active");
            menuOn();
            menuItemSlideIn();
        }
    }

    for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].style.transitionDelay = `${0.05 * i + 0.25}s`;
    }
}