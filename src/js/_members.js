$(() => {
  const swiper = new Swiper(".members__slider-container", {
    slidesPerView: 1,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      prevEl: ".members__control-left",
      nextEl: ".members__control-right",
      disabledClass: "members__control-disabled",
    },
    breakpoints: {
      1080: {
        slidesPerView: 3,
      },
      720: {
        slidesPerView: 2,
      },
    },
  });
});
