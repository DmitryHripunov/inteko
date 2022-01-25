document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.slider') !== null) {
    document.querySelectorAll('.js-slider').forEach((n) => {
      // eslint-disable-next-line no-new
      new Swiper(n.querySelector('.js-projects-swiper'), {
        pagination: {
          el: n.querySelector('.js-projects-pagination'),
        },
        navigation: {
          nextEl: '.js-button-next',
          prevEl: '.js-button-prev',
        },

        slidesPerView: 1,
        spaceBetween: 0,
      });
      // eslint-disable-next-line no-new
      new Swiper(n.querySelector('.js-principles-swiper'), {
        pagination: {
          el: n.querySelector('.js-principles-pagination'),
        },
        navigation: {
          prevEl: '.js-button-center-prev',
          nextEl: '.js-button-center-next',
        },
        slidesPerView: 1,
        spaceBetween: 0,
      });
      // eslint-disable-next-line no-new
      new Swiper(n.querySelector('.js-offer-swiper'), {
        pagination: {
          el: n.querySelector('.js-offer-pagination'),
        },
        navigation: {
          prevEl: '.js-button-bottom-prev',
          nextEl: '.js-button-bottom-next',
        },
        slidesPerView: 1,
        spaceBetween: 0,
      });
    });
  }
});
