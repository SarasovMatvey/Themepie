(() => {
  const swiper = new Swiper(".interview__slider", {
    navigation: {
      nextEl: ".interview__control-left",
      prevEl: ".interview__control-right",
      disabledClass: ".interview__control-disabled",
    },
  });
})();
