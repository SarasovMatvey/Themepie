(() => {
  const swiper = new Swiper(".hero__slider", {
    allowTouchMove: false,
    pagination: {
      el: ".hero__pagination",
      type: "bullets",
      bulletClass: "hero__pagination-bullet",
      bulletActiveClass: "hero__pagination-bullet_active",
    },
    autoplay: {
      delay: 5000,
    },
  });
})();
