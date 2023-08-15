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

    if (window.isMobile()) {
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
            teamGlider = new Glide('.glide-team', { autoplay: 2000, gap: 0 }).mount();
        }
        if (document.querySelector('.glide-skills')) {
            skillsGlider = new Glide('.glide-skills', { autoplay: 3000, gap: 0 }).mount();
        }
    }
  
 })();