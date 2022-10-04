
wrapper = document.querySelector('.wrapper'),
inputField = document.querySelector('.body-input input');

inputField.addEventListener('keyup', e=>{
    if(e.key=='Enter' && inputField.value != ''){
        console.log('ok');
    }
})