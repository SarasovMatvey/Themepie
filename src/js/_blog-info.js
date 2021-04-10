(() => {
  const swiper = new Swiper(".blog-info__slider", {
    pagination: {
      el: ".blog-info__pagination",
      type: "bullets",
      bulletClass: "section-slider__pagination-bullet",
      bulletActiveClass: "section-slider__pagination-bullet_active",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
})();
