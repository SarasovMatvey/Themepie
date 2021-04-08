(() => {
  const navItems = $(".portfolio__nav-item");
  const toggle = $(".portfolio__dash-toggle");

  setDefaultTogglePos(0);

  navItems.on("click", (e) => {
    const navItemWidth = $(e.target).width();
    const centerOfNavItem = $(e.target).position().left + navItemWidth / 2;

    setTogglePos(navItemWidth, centerOfNavItem);
  });

  function setTogglePos(width, left) {
    toggle.css({
      width,
      left,
    });
  }

  function setDefaultTogglePos(index) {
    const navItemWidth = $(navItems[index]).width();
    const centerOfNavItem =
      $(navItems[index]).position().left + navItemWidth / 2;

    setTogglePos(navItemWidth, centerOfNavItem);
  }
})();
