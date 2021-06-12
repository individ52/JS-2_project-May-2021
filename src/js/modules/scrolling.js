const scrolling = (upSelector) => {
    let upElem = document.querySelector(upSelector);
    window.addEventListener('scroll', ()=> {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeInDown');
            upElem.classList.remove('fadeOutDown');
        } else {
            upElem.classList.remove('fadeInDown');
            upElem.classList.add('fadeOutDown');
        }
    });
    
    // Scrolling with RAF

    let links = document.querySelectorAll('[href^="#"]'),
        speed = .2;

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            console.log(widthTop);
            console.log(document.documentElement);
            requestAnimationFrame(step);
    
            function step (time) {
                if(!start) start = time;
                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
                console.log(progress);
                    document.documentElement.scrollTo(0, r);
    
                    if(r != widthTop+toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
            }
        });
    });


    // Pure js scrolling

    // const elem = document.documentElement,
    //       body = document.body;

    // const calcScroll = () => {
    //     upElem.addEventListener('click', function(e) {
    //         let scrollTop = Math.round(elem.scrollTop || body.scrollTop);
    //         if (this.hash != "") {
    //             e.preventDefault();
    //             let hashElement = document.getElementById(this.hash.substring(1)),
    //                 hashElementTop = 0;
    //             while (hashElement.offsetParent) { 
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };

    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 10,
    //         prevScrollTop,
    //         speed;

    //         if(to > from) {
    //             speed = 30;
    //         } else {
    //             speed = -30;
    //         }

    //         let move = setInterval(function() {
    //             let scrollTop = Math.round(elem.scrollTop || body.scrollTop);
    //             if (
    //                 prevScrollTop === scrollTop ||
    //                 (to > from && scrollTop >= to) ||
    //                 (to < from && scrollTop <= to)
    //             ) {
    //                 clearInterval(move);
    //                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
                     
    //             }else {
    //                 body.scrollTop += speed; 
    //                 elem.scrollTop += speed;
    //                 prevScrollTop = scrollTop;
    //             }
    //         },timeInterval);
    // }

    // calcScroll();
};

export default scrolling;