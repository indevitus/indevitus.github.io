import Glide from '@glidejs/glide';


(function() {

    const traverseAndAddClass = (parentClass, childClass) => {
        if (document.querySelectorAll(parentClass) && document.querySelectorAll(parentClass).length > 0) {
            document.querySelectorAll(parentClass).forEach(element => {
                element.classList.add(childClass);
            });
        }
    }

    const traverseAndRemoveClass = (parentClass, childClass) => {
        if (document.querySelectorAll(parentClass) && document.querySelectorAll(parentClass).length > 0) {
            document.querySelectorAll(parentClass).forEach(element => {
                element.classList.remove(childClass);
            });
        }
    }

    if (window.innerWidth <= 1024) {
        if (document.querySelector('.glide-team') || document.querySelector('.glide-skills')) {
            traverseAndAddClass('.__glide', 'glide');
            traverseAndAddClass('.__glide__track', 'glide__track');
            traverseAndAddClass('.__glide__bullets', 'glide__bullets');
            traverseAndAddClass('.__glide__bullet', 'glide__bullet');
            traverseAndAddClass('.__glide__slides', 'glide__slides');
            traverseAndAddClass('.__glide__slide', 'glide__slide');

            document.querySelectorAll('.__glide__slide.hidden').forEach(element => {
                element.remove();
            });
        }

        let teamGlider, skillsGlider;
        if (document.querySelector('.glide-team')) {
            teamGlider = new Glide('.glide-team', { type: 'carousel', autoplay: 2000 }).mount();
        }
        if (document.querySelector('.glide-skills')) {
            skillsGlider = new Glide('.glide-skills', { type: 'carousel', autoplay: 2000 }).mount();
        }
    }

    window.addEventListener('resize', () => {
        location.reload();
    }, true);
 })();
