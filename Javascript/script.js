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
// Initialize the Shirts Swiper
const swiperShirts = new Swiper('.mySwiperShirts', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Initialize the Hoodies Swiper
const swiperHoodies = new Swiper('.mySwiperHoodies', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Initialize the Sweaters Swiper
const swiperSweaters = new Swiper('.mySwiperSweaters', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
