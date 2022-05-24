

(function () {
    // /* ========== Swiper ==========*/
    // const swiper = new Swiper(".hero-slider", {
    //     scrollbar: {
    //         el: ".swiper-scrollbar",
    //         hide: true,
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    // });

    /* ========== Menu Scrolling ==========*/
    function scrollHeader() {
        const header = document.querySelector('.header');
        if (this.scrollY >= 0) {
            header.classList.add('header-fixed');
        } else if (this.scrollY < 76 && header.classList.contains('header-fixed')) {
            header.classList.remove('header-fixed');
        }
    }
    window.addEventListener('scroll', scrollHeader);

    /*=========== Smooth Skroll ===========*/
    const anchors = document.querySelectorAll('a[href^="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href');
            if (blockID.length > 1) {
                document.getElementById(blockID.substr(1)).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    /*=========== Humbeurger ===========*/
    const humbeurger = document.querySelector('.humbeurger');
    humbeurger.addEventListener('click', () => humbeurger.classList.toggle('humbeurger-active'));


    /*=========== Google Map ===========*/
    // function initMap() {
    //     const mapElement = document.getElementById("map");
    //     const kords = { lat: 48.919587323526386, lng: 24.71181195003726 };
    //     const options = {
    //         center: kords,
    //         zoom: 15,
    //     }
    //     const map = new google.maps.Map(mapElement, options);
    //     const marker = new google.maps.Marker({
    //         position: kords,
    //         map,
    //         title: "Hello World!",
    //         icon: 'http://maps.google.com/mapfiles/kml/pal5/icon50.png'
    //     });
    // }
    // window.initMap = initMap;

})();

