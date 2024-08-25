// スライダー
function initializeSlick() {
    if ($('.voice__list').hasClass('slick-initialized')) {
        $('.voice__list').slick('unslick');
    }

    // SP仕様 
    if (window.matchMedia('(max-width: 1279px)').matches) {
        $(".voice__list").slick({
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slide-arrow arrow__prev"><img src="assets/image/arrow_01.png" alt=""></div>',
            nextArrow: '<div class="slide-arrow arrow__next"><img src="assets/image/arrow_02.png" alt=""></div>'
        });
    }
    // PS仕様
    else if (window.matchMedia('(min-width: 1280px)').matches) {
        $(".voice__list").slick({
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<div class="slide-arrow arrow__prev"><img src="assets/image/arrow_01.png" alt=""></div>',
            nextArrow: '<div class="slide-arrow arrow__next"><img src="assets/image/arrow_02.png" alt=""></div>'
        });
    }
}

initializeSlick();

$(window).on('resize', function() {
    initializeSlick();
});

// アコーディオン
$('.faq__list--question').click(function() {
        $('.faq__list--question').not(this).next().slideUp();
        $('.faq__list--question').not(this).removeClass('active');
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });




