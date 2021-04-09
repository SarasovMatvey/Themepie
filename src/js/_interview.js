(() => {
  const swiper = new Swiper(".interview__slider-container", {
    navigation: {
      prevEl: ".interview__control-left",
      nextEl: ".interview__control-right",
      disabledClass: "interview__control-disabled",
    },
  });
})();
