"use strict"

// Инициализируем Swiper
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Адаптив
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 990px
        1280: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
});

let burger = document.querySelector(".links");

burger.addEventListener("click", function(){
  let menu = document.querySelector(".links-container");
  menu.style.display = "flex";
});

// Fix bag with background on mobile devices
const device = navigator.userAgent.toLowerCase();
const mob = device.match(/android|webos|iphone|ipad|ipod|iemobile|opera mini/);
const header = document.querySelector(".header");

if (mob) {
  header.classList.remove("bg-fixed");
}