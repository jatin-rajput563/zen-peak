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

$('.sec-4-slider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".leftArrow",
    nextArrow: ".rightArrow",
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                focusOnSelect: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: true
            }
        },
    ]
});
document.getElementById("bio-card").style.display = "none";
function myFunction() {
    document.getElementById("bio-card").style.display = "block";
}

function myFunction4() {
    document.getElementById("bio-card").style.display = "none";
}

document.getElementById("bio-card-2").style.display = "none";
function myFunction2() {
    document.getElementById("bio-card-2").style.display = "block";
}

function myFunction5() {
    document.getElementById("bio-card-2").style.display = "none";
}

document.getElementById("bio-card-3").style.display = "none";
function myFunction3() {
    document.getElementById("bio-card-3").style.display = "block";
}

function myFunction6() {
    document.getElementById("bio-card-3").style.display = "none";
}