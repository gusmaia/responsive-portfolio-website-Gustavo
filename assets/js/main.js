"use strict";
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu"), navToggle = document.querySelector("#nav-toggle"), navClose = document.querySelector("#nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.add("show-menu");
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.remove("show-menu");
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.remove("nav-menu");
}
navLink.forEach(e => e.addEventListener("click", linkAction));
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"), skillsHeader = document.querySelectorAll(".skills__header");
function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
    ;
}
skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 80)
        nav === null || nav === void 0 ? void 0 : nav.classList.add("scroll-header");
    else
        nav === null || nav === void 0 ? void 0 : nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 560)
        scrollUp === null || scrollUp === void 0 ? void 0 : scrollUp.classList.add("show-scroll");
    else
        scrollUp === null || scrollUp === void 0 ? void 0 : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== DARK LIGHT THEME ====================*/
