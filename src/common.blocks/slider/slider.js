document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.slider') !== null) {
    document.querySelectorAll('.js-slider').forEach((n) => {
      // eslint-disable-next-line no-new
      new Swiper(n.querySelector('.js-projects-swiper'), {
        pagination: {
          el: n.querySelector('.js-projects-pagination'),
        },
        slidesPerView: 1,
        spaceBetween: 0,
      });
      // eslint-disable-next-line no-new
      new Swiper(n.querySelector('.js-offer-swiper'), {
        pagination: {
          el: n.querySelector('.js-offer-pagination'),
        },
        slidesPerView: 1,
        spaceBetween: 0,
      });
      // eslint-disable-next-line no-new
      new Swiper(n.querySelector('.js-principles-swiper'), {
        pagination: {
          el: n.querySelector('.js-principles-pagination'),
        },
        slidesPerView: 1,
        spaceBetween: 0,
      });
    });
  }
});
