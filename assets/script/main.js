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
            swipe: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slide-arrow arrow__prev"><img src="assets/image/arrow_01.png" alt=""></div>',
            nextArrow: '<div class="slide-arrow arrow__next"><img src="assets/image/arrow_02.png" alt=""></div>',
            touchThreshold: 10,
            speed: 300, 
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    // PC仕様
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
$('.faq__list').each(function() {
    var $faqSection = $(this);
    $faqSection.find('.faq__list--question').next().hide();
    $faqSection.find('.faq__list--question').click(function() {
        $faqSection.find('.faq__list--question').not(this).next().slideUp();
        $faqSection.find('.faq__list--question').not(this).removeClass('active').find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
        $(this).next().slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
        }
    });
});

