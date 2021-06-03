import {getResource} from '../services/requests';

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunction = ()=> {
        let calcData;
        getResource('http://localhost:3000/calc')
            .then(res => tech(res[0]))
            .catch(error => console.log(error));

        const tech = (calcData) => {
            if(!calcData) {
                resultBlock.textContent = "Something went wrong.";
            } else {
                console.log(calcData.size[sizeBlock.value]);
                console.log(calcData.material[materialBlock.value]);
                console.log(calcData.options[optionsBlock.value]);
                sum = Math.round((+calcData.size[sizeBlock.value])*(+calcData.material[materialBlock.value])+ (optionsBlock.value ? (+calcData.options[optionsBlock.value]) : 0));
                
                if(sizeBlock.value === "" || materialBlock.value === "") {
                    resultBlock.textContent = "Please, choose size and material.";
                } else if(promocodeBlock.value === calcData.promo['code']) {
                    resultBlock.textContent = Math.round(sum * (+calcData.promo['discount']));
                } else {
                    resultBlock.textContent = sum;
                }
            }
        }
        

        
    };

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
};

export default calc;