const filter = ()=> {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');


        const typeFilter = (markType) => {
            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
                
            });
            no.style.display = "none";
            no.classList.remove('animated', 'fadeIn');
        
            if(markType) {
                markType.forEach(mark => {
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');

                });
            } else {
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
            }
        };

        menu.addEventListener('click', (e)=> {
            let target = e.target;
            if(target && target.tagName == "LI") {
                switch(target.className) {
                    case "all": 
                        typeFilter(wrapper.querySelectorAll('.all'));
                        break;
                    case "lovers":
                        typeFilter(wrapper.querySelectorAll('.lovers'));
                        break;
                    case "chef":
                        typeFilter(wrapper.querySelectorAll('.chef'));
                        break;
                    case "girl":
                        typeFilter(wrapper.querySelectorAll('.girl'));
                        break;
                    case "guy":
                        typeFilter(wrapper.querySelectorAll('.guy'));
                        break;
                    case "grandmother":
                        typeFilter();
                        break;
                    case "granddad":
                        typeFilter();
                        break;
                }
                items.forEach(item => item.classList.remove('active'));
                target.classList.add('active');
            }
        });
};

export default filter;