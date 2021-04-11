(() => {
  const mobileMenu = $(".header__mobile-menu");
  const mobileMenuCopy = mobileMenu.clone();
  mobileMenu.remove();
  $("body").prepend(mobileMenuCopy);

  const hamburger = $(".header__hamburger");
  hamburger.on("click", function () {
    mobileMenuCopy.toggleClass("mobile-menu_open");
  });
  const closeMenuBtn = $(".header__mobile-menu .mobile-menu__close-btn");
  closeMenuBtn.on("click", function () {
    mobileMenuCopy.toggleClass("mobile-menu_open");
  });
})();
