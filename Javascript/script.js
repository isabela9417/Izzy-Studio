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


// the product slider


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  