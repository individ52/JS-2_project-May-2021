const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1,
        paused;
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = items.length;
        }
        
        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = "none";
        });

        items[slideIndex-1].style.display = 'block';
    };

    showSlides(slideIndex);

    function changeSlides(n) {
        showSlides(slideIndex += n);
    };

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', ()=> {
            changeSlides(-1);
            items[slideIndex-1].classList.remove('fadeInLeft');
            items[slideIndex-1].classList.add('fadeInRight');
        });
        nextBtn.addEventListener('click', ()=> {
            changeSlides(1);
            items[slideIndex-1].classList.remove('fadeInRight');
            items[slideIndex-1].classList.add('fadeInLeft');

        });
    } catch(e) {}

    function activateAnimation() {
        if(dir === "vertical") {
            paused = setInterval(function() {
                changeSlides(1);
                items[slideIndex-1].classList.add('fadeInDown');
            }, 3000);
        } else {
            paused = setInterval(function() {
                changeSlides(1);
                items[slideIndex-1].classList.remove('fadeInRight');
                items[slideIndex-1].classList.add('fadeInLeft');
            }, 3000);
        }
    };
    activateAnimation();
    items[0].parentNode.addEventListener('mouseenter', function() {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', function() {
        activateAnimation();
    });
    
};

export default sliders;