/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu"),
      navToggle = document.querySelector("#nav-toggle"),
      navClose = document.querySelector("#nav-close") as HTMLElement | null;

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu?.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu?.classList.remove("show-menu");
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    navMenu?.classList.remove("nav-menu");
}
navLink.forEach(e => e.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(this: any) {
    let itemClass = this.parentNode.className;

    for (let i=0; i<skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close"
    }
    if(itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open"
    };
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills)
})

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(this: any) {
    const nav = document.getElementById("header")

    if(this.scrollY >= 80) nav?.classList.add("scroll-header"); else nav?.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(this: any) {
    const scrollUp = document.getElementById("scroll-up");

    if(this.scrollY >= 560) scrollUp?.classList.add("show-scroll"); else scrollUp?.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

