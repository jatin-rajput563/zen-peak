$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                centerMode: true,
                focusOnSelect: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: true,
                focusOnSelect: true,
                dots: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1.2,
                centerMode: true,
                focusOnSelect: true
            }
        }
    ]
});