(() => {
  const swiper = new Swiper(".interview__slider-container", {
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    spaceBetween: 40,
    navigation: {
      prevEl: ".interview__control-left",
      nextEl: ".interview__control-right",
      disabledClass: "interview__control-disabled",
    },
  });
})();
