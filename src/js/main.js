$(document).ready(function(){
    const team= $('#team')
    team.owlCarousel({
        margin: 20,
        loop: true,
        center: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: {
            0: {
               items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }

    });
    const effective= $('#effective')
    effective.owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1.2
            }
        }
    });
    const creators= $('#creators')
    creators.owlCarousel({
        margin: 65,
        loop: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            372: {
                items: 1.5
            },
            535: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
})
