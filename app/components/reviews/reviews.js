var reviewsSlider = '.reviews-slider',
    options = {
        loop: true,
        speed:700,
        slidesPerView: 3,
        spaceBetween: 30,
        effect: 'slide',
        grabCursor: true,
        navigation: {
            nextEl: '.reviews__swiper-button-next',
            prevEl: '.reviews__swiper-button-prev',
        },
        breakpoints: {
            639: {
                spaceBetween: 10,
                slidesPerView: 1,
            },
            1023: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            1349: {
                slidesPerView: 3,
                spaceBetween: 10,
            }
        },
// Events
        on: {
            imagesReady: function(){
                this.el.classList.remove('loading');
            }
        }
    };
var reviewsSwiper = new Swiper(reviewsSlider, options);


reviewsSwiper.on('slideChange', function () {
    $('.reviews-slide').removeClass('active');
});

var addReviewsClass = function () {
    $(this).parents('.reviews-slide').toggleClass('active');
};

$(document).on('click', '.js-reviews-toggle-class', addReviewsClass);