(() => {
  const swiper = new Swiper(".reviews__slider-container", {
    slidesPerView: 4,
    spaceBetween: 5,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      prevEl: ".reviews__control-left",
      nextEl: ".reviews__control-right",
      disabledClass: "reviews__control-disabled",
    },
  });
})();
