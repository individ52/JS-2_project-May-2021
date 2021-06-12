    // import checkNumInputs from './checkNumInputs';

import {postData} from '../services/requests';

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]')

    // checkNumInputs('input[name="user_phone"]');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png"
    };

    const path = { 
        designer: "assets/server.php",
        question: "assets/question.php"
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'file is unselected';
        });
    };

    upload.forEach(item=> {
        item.addEventListener('input', ()=> {
            postData(path.designer, item.files[0])
                .then(res => {
                    console.log(res);
                    textMessage.textContent = message.success;
                });
            // console.log(item.files[0]);
            let dots; 
            let arr = item.files[0].name.split(".");
            arr[0].length > 7 ? dots = "..." : dots = ".";
            const name = arr[0].substring(0, 8) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(()=> {
                item.style.display = "none";
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question; 
            console.log(api);
            
            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure 
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.classList.remove('fadeInUp');
                        statusMessage.classList.add('fadeOutUp');
                        setTimeout(statusMessage.remove(), 400);
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
};

export default forms;