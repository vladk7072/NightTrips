$(function () {
  const tripSlider = new Swiper(".trip__slider", {
    hashNavigation: {
      watchState: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".trip__btn-next",
      prevEl: ".trip__btn-prev",
    },
  });

  let slidersTotal = document.querySelector(".trip__slide-num");
  tripSlider.on("slideChange", function () {
    let currentSlide = ++tripSlider.realIndex;
    slidersTotal.innerHTML = "0" + currentSlide + ".";
  });

  const tripBar = document.querySelector(".trip__bar");
  tripBar.addEventListener("click", (e) => {
    $(".trip__bar-item--active").removeClass("trip__bar-item--active");
    e.target.classList.add("trip__bar-item--active");
  });

  const searchForm = document.querySelector(".header__top-form"),
  searchBtn = document.querySelector(".header__top-mob"),
  menuTopBtn = document.querySelector(".header__top-btn"),
  searchImg = document.querySelector(".header__top-mob"),
  menuBtn = document.querySelector(".header__top-btn"),
  menuList = document.querySelector('.header__menu');

  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("header__top-form--active"),
    menuTopBtn.classList.toggle("header__top-btn--active"),
    searchImg.classList.toggle("header__top-mob--active");
  });

  menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("header__menu--active")
  })
  
});
