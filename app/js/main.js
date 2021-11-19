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

  const slideTitle = document.querySelector(".trip__info-title"),
  slideText1 = document.querySelector(".trip__info-text--1"),
  slideText2 = document.querySelector(".trip__info-text--2");

  let slidersTotal = document.querySelector(".trip__slide-num");
  tripSlider.on("slideChange", function () {
    let currentSlide = ++tripSlider.realIndex;
    slidersTotal.innerHTML = "0" + currentSlide + ".";
    switch (currentSlide) {
      case 1:
        slideTitle.innerHTML = "Chill Adventure"
        slideText1.innerHTML = `Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu
        condimentum fames.`
        slideText2.innerHTML = `Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci
        adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis
        tortor vel, mattis.`
        break;
      case 2:
        slideTitle.innerHTML = "Spooky Times"
        slideText1.innerHTML = `Deserunt exercitationem maxime aliquid omnis voluptate voluptates mollitia quam rem ipsum aperiam temporibus neque, adipisci, laudantium officiis.`
        slideText2.innerHTML = `Molestias harum minima soluta obcaecati, vel cumque sint ut tempore aperiam ex ad exercitationem, alias, amet esse voluptatum veniam provident consequuntur nobis.`
        break;
      case 3:
        slideTitle.innerHTML = "Desert Madness"
        slideText1.innerHTML = `Corporis tempora tenetur laboriosam iste. Harum ut distinctio excepturi deserunt optio.`
        slideText2.innerHTML = `Laudantium molestias numquam architecto illum adipisci voluptatibus non repellat, voluptas quos nostrum fugiat harum culpa voluptatem dolore, nulla id!`
        break;
      case 4:
        slideTitle.innerHTML = "Out in the wild"
        slideText1.innerHTML = `Fugit suscipit, ut, ipsum necessitatibus sapiente ratione minus, nam saepe iusto laudantium sit facilis.`
        slideText2.innerHTML = `Deserunt exercitationem maxime aliquid omnis voluptate voluptates mollitia quam rem ipsum aperiam temporibus neque, adipisci, laudantium officiis.`
        break;
    }
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
