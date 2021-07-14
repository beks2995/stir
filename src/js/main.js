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

    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.874186, 74.59212],
            zoom: 18
        });
        var myIcon = DG.icon({
            iconUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/location-pin-3100525-2589423.png',
            iconSize: [50, 40],
        });
        DG.marker([42.874277, 74.592072], {icon: myIcon}).addTo(map).bindPopup('Бизнес центр 79, 0 этаж')
    });
})
