$(document).on('ready', function() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        $(".voice__list").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
});
