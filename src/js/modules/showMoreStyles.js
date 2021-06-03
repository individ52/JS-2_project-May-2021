
import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    // const carts = document.querySelectorAll(styles),
       const btn = document.querySelector(trigger);

    // carts.forEach(cart => {
    //     cart.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', ()=> {
    //     carts.forEach(cart => {
    //         cart.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            // cart.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    // });

// this. можно использовать только с обычными функциями (function()), так как он ссылается к элементу. стрелочную нельзя, так как ана ананимная.
    btn.addEventListener('click', function() {
        // getResource('assets/less/db.json')
        getResource('http://localhost:3000/styles')
            .then(res => createCarts(res))
            .catch(error => console.log(error));

            this.remove();
    }); 
    
    function createCarts(response) {
        response.forEach(({src, title, link}) => {
            let cart = document.createElement('div');
            cart.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
             
            cart.innerHTML = `
                <div class='styles-block'>
                    <img src='${src}' alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            document.querySelector(wrapper).appendChild(cart);
        });
    };
}; 

export default showMoreStyles;