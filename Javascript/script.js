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

// 
var menuIcon = document.querySelector("#menu-icon");
var navBar = document.querySelector(".navBar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

/*====================== scroll section active link ==========================*/
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    var top = window.scrollY;
    var offset = sec.offsetTop - 150;
    var height = sec.offsetHeight;
    var id = sec.getAttribute("id");

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id +"]").classList.add("active");
      });
    }
  })
/*======================= sticky navbar ==================*/

  
var header = document.querySelector(".header");
header.classList.toggle("sticky", window.scrollY > 100);

/*============== remove menu icon nabar when click navbar link (scroll) ==============*/
     menuIcon.classList.remove("bx-x");
     navBar.classList.remove("active");
};
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

// Get the menu icon, nav bar, and menu items
var menuIcon = document.querySelector("#menu-icon");
var navBar = document.querySelector(".navBar");
var menuItems = document.querySelectorAll(".navBar li");

// When the menu icon (hamburger) is clicked, toggle the menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Change icon to X
  navBar.classList.toggle("active"); // Show or hide the nav menu
};

// Close the menu when any item is clicked
menuItems.forEach(item => {
  item.onclick = () => {
    navBar.classList.remove("active"); // Hide the nav menu
    menuIcon.classList.remove("bx-x"); // Change X back to hamburger
  };
});
