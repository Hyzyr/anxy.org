const slickSliders = document.querySelectorAll(".slickSlider");
if (slickSliders) {
  const slickSettings = {
    brands: {
      slidesToShow: 4,
      infinite: true,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 1500,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 3.6,
            speed: 1000,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            speed: 1000,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 2.2,
            speed: 1000,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1.8,
            cssEase: "linear",
            speed: 2000,
            autoplaySpeed: 0,
          },
        },
      ],
    },
    defaultSlider: {
      slidesToShow: 3,
      speed: 1200,
      arrows: true,
      dots: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1260,
          settings: {
            slidesToShow: 2.3,
          },
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2.1,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1.6,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1.2,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
  };
  const getSlickSettings = (settings) => {
    return slickSettings[settings] ?? {};
  };
  slickSliders.forEach((slider) => {
    const settings = slider.getAttribute("data-slick") ?? null;
    const nextArrow = slider.parentElement.querySelector(".nextArrow") ?? null;
    const prevArrow = slider.parentElement.querySelector(".prevArrow") ?? null;
    console.log(nextArrow, prevArrow);
    $(slider).slick({
      ...getSlickSettings(settings),
      arrows: !!(nextArrow || prevArrow),
      nextArrow,
      prevArrow,
    });
  });
}
