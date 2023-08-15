import Glide from '@glidejs/glide';

(function() {
    if (window.isMobile()) {
        if (document.querySelector('.glide-team') || document.querySelector('.glide-skills')) {
            document.querySelectorAll('.__glide').forEach(element => {
                element.classList.add('glide'); 
            });
            document.querySelectorAll('.__glide__track').forEach(element => {
                element.classList.add('glide__track'); 
            });
            document.querySelectorAll('.__glide__bullets').forEach(element => {
                element.classList.add('glide__bullets'); 
            });
            document.querySelectorAll('.__glide__slides').forEach(element => {
                element.classList.add('glide__slides'); 
            });                        

            document.querySelectorAll('.__glide__slide.hidden').forEach(element => {
                element.remove();
            });
            document.querySelectorAll('.__glide__slide').forEach(element => {
               element.classList.add('glide__slide'); 
            });
            document.querySelectorAll('.__glide__bullet').forEach(element => {
               element.classList.add('glide__bullet'); 
            });
        }

        if (document.querySelector('.glide-team')) {
            new Glide('.glide-team', { autoplay: 2000, gap: 0 }).mount();
        }
        if (document.querySelector('.glide-skills')) {
            new Glide('.glide-skills', { autoplay: 3000, gap: 0 }).mount();
        }

        window.addEventListener("resize", () => {
            
        });
    }
 })();