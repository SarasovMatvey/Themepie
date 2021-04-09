(() => {
  const progressbarsFills = $(".full-info__pb-fill");

  for (const pbFill of progressbarsFills) {
    const pbFillWidth = $(pbFill).width();
    const parentWidth = $(pbFill)
      .parent(".full-info__skill-progressbar")
      .width();
    const pbFillWidthInPercentages = Math.ceil(
      (pbFillWidth / parentWidth) * 100
    );

    $(pbFill).append(
      `<span class="full-info__pb-fill-bubble">${pbFillWidthInPercentages}%</span>`
    );
  }
})();
