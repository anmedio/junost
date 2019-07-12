"use strict";

// eslint-disable-next-line func-names
$(document).ready(function () {
  $('.grade-section__title').on('click', function (_ref) {
    var target = _ref.target;
    $(target).parents('.grade-section').toggleClass('is-open'); // $(target)
    //   .parents('.grade-section')
    //   .find('.grade__title')
    //   .slideToggle(250);
  });
  $('.grade-section__slider').addClass('owl-carousel owl-theme').owlCarousel({
    loop: false,
    items: 1,
    dots: false,
    nav: false,
    margin: 15,
    responsive: {
      768: {
        items: 1,
        margin: 30
      },
      1024: {
        items: 2,
        margin: 40
      },
      1440: {
        items: 2,
        margin: 55
      }
    }
  });
  var src = $('#popup');
  $('.grade__item').magnificPopup({
    removalDelay: 250,
    items: {
      src: src,
      type: 'inline'
    },
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    }
  });
});