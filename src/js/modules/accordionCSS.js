const accordionCSS = (triggerSelector, contentSelector)=> {
    const btns = document.querySelectorAll(triggerSelector),
          blocks = document.querySelectorAll(contentSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    btns.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            if(!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
                
            } else {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.remove('active', 'active-style');
            }
        });
    });

}; 

export default accordionCSS;