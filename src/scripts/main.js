import Glide from '@glidejs/glide';
import AOS from 'aos';
import 'aos/dist/aos.css';

(function() {
    const traverseAndAddClass = (parentClass, childClass) => {
        if (document.querySelectorAll(parentClass) && document.querySelectorAll(parentClass).length > 0) {
            document.querySelectorAll(parentClass).forEach(element => {
                element.classList.add(childClass);
            });
        }
    }

    // Clients slider
    if(document.querySelector('.glide-clients')) {
        traverseAndAddClass('.__glide', 'glide');
        traverseAndAddClass('.__glide__track', 'glide__track');
        traverseAndAddClass('.__glide__bullets', 'glide__bullets');
        traverseAndAddClass('.__glide__bullet', 'glide__bullet');
        traverseAndAddClass('.__glide__slides', 'glide__slides');
        traverseAndAddClass('.__glide__slide', 'glide__slide');

        new Glide('.glide-clients', {
            type: 'carousel',
            autoplay: 3000,
            gap: 60,
            swipeThreshold: false,
            dragThreshold: false,
            perView: 3,
            breakpoints: {
                768: {
                    perView: 2,
                }
            }
        }).mount();
    }

    // Team slider
    if(document.querySelector('.glide-team')) {
        traverseAndAddClass('.__glide', 'glide');
        traverseAndAddClass('.__glide__track', 'glide__track');
        traverseAndAddClass('.__glide__bullets', 'glide__bullets');
        traverseAndAddClass('.__glide__bullet', 'glide__bullet');
        traverseAndAddClass('.__glide__slides', 'glide__slides');
        traverseAndAddClass('.__glide__slide', 'glide__slide');

        let glideInitialized = false;
        const BREAKPOINTS_LG = 1024;
        const glideSettingsTeam = {
            type: 'carousel',
            autoplay: 2500,
            swipeThreshold: 40,
            gap: 30,
            perView: 3,
            breakpoints: {
                425: {
                    perView: 1.5,
                    swipeThreshold: 20,
                },
                768: {
                    perView: 2,
                }
            }
        }

        let glide = new Glide('.glide-team', glideSettingsTeam);

        window.addEventListener('DOMContentLoaded', () => {
            const handleResize = (innerWidth) => {
                if(innerWidth >= BREAKPOINTS_LG && glideInitialized){
                    glideInitialized = false;
                    glide.destroy();
                } else if(innerWidth < BREAKPOINTS_LG && !glideInitialized){
                    glideInitialized = true;
                    glide = new Glide('.glide-team', glideSettingsTeam);
                    glide.mount();
                }
            }

            handleResize(window.innerWidth);
            window.addEventListener('resize', (event) => handleResize(event.target.innerWidth))
        })
    }

    // Testimonials slider
    if (document.querySelector('.glide-testimonials')) {
        traverseAndAddClass('.glide-testimonials .__glide', 'glide');
        traverseAndAddClass('.glide-testimonials .__glide__track', 'glide__track');
        traverseAndAddClass('.glide-testimonials .__glide__bullets', 'glide__bullets');
        traverseAndAddClass('.glide-testimonials .__glide__bullet', 'glide__bullet');
        traverseAndAddClass('.glide-testimonials .__glide__slides', 'glide__slides');
        traverseAndAddClass('.glide-testimonials .__glide__slide', 'glide__slide');

        new Glide('.glide-testimonials', {type: 'carousel', autoplay: 3000, gap: 0, swipeThreshold: false, dragThreshold: false }).mount();
    }

    AOS.init({
        once: true,
        easing: 'ease-in-sine',
        // anchorPlacement: 'top-bottom',
        disable: 'mobile'
    });
 })();
