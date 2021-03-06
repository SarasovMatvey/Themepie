(() => {
  const swiper = new Swiper(".hero__slider", {
    allowTouchMove: false,
    pagination: {
      el: ".hero__pagination",
      type: "bullets",
      bulletClass: "section-slider__pagination-bullet",
      bulletActiveClass: "section-slider__pagination-bullet_active",
    },
    autoplay: {
      delay: 5000,
    },
  });
})();
