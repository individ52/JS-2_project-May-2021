const accordionJS = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btns.forEach(btn => {                                
                btn.classList.remove('active-style');
                btn.nextElementSibling.classList.remove('active-content');
                btn.nextElementSibling.style.maxHeight = "0px";
            });
            if(!this.classList.contains('active-style')) {
                console.log('add');
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                console.log('remove');
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = "0px";
            }
            
        });
    });
};

export default accordionJS;