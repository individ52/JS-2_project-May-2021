const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if(e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        input.addEventListener('input', function(e){
            let val = input.value;
            val.replace(/./g, (w)=> {
                // console.log(w.);
                if(w.match(/[^а-яё 0-9]/ig)) {
                    input.value = '';
                };    
            });
            
        }); 
    });
};

export default checkTextInputs;

