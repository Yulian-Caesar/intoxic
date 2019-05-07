var sliderSelector = '.swiper-container',
    options = {
        loop: true,
        speed:700,
        slidesPerView: 'auto', // or 'auto'
        centeredSlides : true,
        effect: 'coverflow', // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
            rotate: 0, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 860, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            slideShadows: false,

        },
        grabCursor: true,
        // parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1189: {
                coverflowEffect: {
                    depth: 700, // Depth offset in px (slides translate in Z axis)
                }
            },
            1023: {
                coverflowEffect: {
                    depth: 800, // Depth offset in px (slides translate in Z axis)
                }
            },
            767: {
                coverflowEffect: {
                    depth: 0, // Depth offset in px (slides translate in Z axis)
                }
            }
        },
        // Events
        on: {
            imagesReady: function(){
                this.el.classList.remove('loading');
            }
        }
    };
var mySwiper = new Swiper(sliderSelector, options);


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});