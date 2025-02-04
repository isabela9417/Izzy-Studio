// home page slider
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

    slides[slideIndex - 1].style.opacity = 1;
    setTimeout(showSlides, 4000);
}
showSlides();


// Get the header element
const header = document.querySelector('header');

// Add an event listener to monitor the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  
        header.classList.add('scrolled'); 
    } else {
        header.classList.remove('scrolled'); 
    }
});


/*============== menu icon navbar ==============*/

var menuIcon = document.querySelector("#menu-icon");
var navBar = document.querySelector(".navBar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

var menuItems = document.querySelectorAll(".navBar li"); 

menuItems.forEach(item => {
  item.onclick = () => {
    navBar.classList.remove("active"); 
    menuIcon.classList.remove("bx-x");
  };
});