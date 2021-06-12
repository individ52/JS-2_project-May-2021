import {postData} from "../services/requests";
const drop = () => {
    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart * 
    // drop - отпустил кнопку мыши и объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        console.log('enter');
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor= 'rgba(0,0,0, .7)';
    }
    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
           item.closest('.file_upload').style.backgroundColor= '#fff';
        } else {
            item.closest('.file_upload').style.backgroundColor= '#ededed';
        }
     }
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e)=> {
            input.files = e.dataTransfer.files;
            console.log(input.files);
            postData("assets/server.php", input.files)
            .then(res => {
                console.log(res);
            })
            .catch(() => console.log('smt went wrong.'));
            let dots; 
            let arr = input.files[0].name.split(".");
            arr[0].length > 7 ? dots = "..." : dots = ".";
            const name = arr[0].substring(0, 8) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });

};

export default drop;