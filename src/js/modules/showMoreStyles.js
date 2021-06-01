const showMoreStyles = (trigger, styles) => {
    const carts = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    carts.forEach(cart => {
        cart.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', ()=> {
        carts.forEach(cart => {
            cart.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            cart.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    });
}; 

export default showMoreStyles;