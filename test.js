const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

card1.addEventListener("click", () => {
    document.querySelector(".circle1").style.opacity = "0";
    document.querySelector(".skillDescription1").style.opacity = "1";
    card1 = document.querySelector(".card-1:hover").style.cursor = "default";
    card1.style.background = "transparent";
})

card2.addEventListener("click", () => {
    document.querySelector(".circle2").style.opacity = "0";
    document.querySelector(".skillDescription2").style.opacity = "1";
    card1 = document.querySelector(".card-2:hover").style.cursor = "default";
    card1.style.background = "transparent";
})

card3.addEventListener("click", () => {
    document.querySelector(".circle3").style.opacity = "0";
    document.querySelector(".skillDescription3").style.opacity = "1";
    card1 = document.querySelector(".card-3:hover").style.cursor = "default";
    card1.style.background = "transparent";
})

//

const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const project3 = document.querySelector(".project3");
const langLogoContainer = document.querySelectorAll(".languageLogoContainer");
const projectTitle = document.querySelectorAll(".projectTitle");


// project 1 hover effects
project1.addEventListener("mouseenter", () => {
    projectTitle[0].style.transform = "translateY(-20px)";
    langLogoContainer[0].style.opacity = "0";
})

project1.addEventListener("mouseleave", () => {
    projectTitle[0].style.transform = "translateY(0px)";
    langLogoContainer[0].style.opacity = "1";
})
//

// project 2 hover effects
project2.addEventListener("mouseenter", () => {
    projectTitle[1].style.transform = "translateY(-20px)";
    langLogoContainer[1].style.opacity = "0";
})

project2.addEventListener("mouseleave", () => {
    projectTitle[1].style.transform = "translateY(0px)";
    langLogoContainer[1].style.opacity = "1";
})
//

// project 3 hover effects
project3.addEventListener("mouseenter", () => {
    projectTitle[2].style.transform = "translateY(-20px)";
    langLogoContainer[2].style.opacity = "0";
})

project3.addEventListener("mouseleave", () => {
    projectTitle[2].style.transform = "translateY(0px)";
    langLogoContainer[2].style.opacity = "1";
})