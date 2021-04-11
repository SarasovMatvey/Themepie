(() => {
  const swiper = new Swiper(".reviews__slider-container", {
    slidesPerView: 1,
    spaceBetween: 5,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      prevEl: ".reviews__control-left",
      nextEl: ".reviews__control-right",
      disabledClass: "reviews__control-disabled",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
      790: {
        slidesPerView: 3,
      },
      520: {
        slidesPerView: 2,
      },
    },
  });
})();
