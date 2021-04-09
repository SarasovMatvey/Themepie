$(() => {
  const swiper = new Swiper(".members__slider-container", {
    slidesPerView: 3,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      prevEl: ".members__control-left",
      nextEl: ".members__control-right",
      disabledClass: "members__control-disabled",
    },
  });
});
