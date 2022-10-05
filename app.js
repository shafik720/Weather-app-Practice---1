
wrapper = document.querySelector('.wrapper'),
bodyHeader = document.querySelector('.body-header'),
bodyHeaderP = bodyHeader.querySelector('p'),
locationBtn = document.querySelector('.app-footer button'),
inputField = document.querySelector('.body-input input');

inputField.addEventListener('keyup', e=>{
    if(e.key=='Enter' && inputField.value != ''){
        let inputCity = inputField.value;
        
        const keys = '3f2f9bc259ce45af21bda8132115c015';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${keys}`;

        bodyHeader.classList.add('pending');
        bodyHeaderP.innerText = `Getting Information ....... `;

        fetch(apiUrl)
        .then(res=>res.json())
        .then(data=>showWeather(data))
    }
})

locationBtn.addEventListener('click',e=>{
    bodyHeader.classList.add('pending');
    bodyHeaderP.innerText = `Getting Information ....... `;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert('Your Browser does not support Geolocation')
    }
})

function onSuccess(position){
    console.log(position);
}
function onError(msg){
        bodyHeader.classList.replace('pending','error');
        bodyHeaderP.innerText = msg.message;
}

function showWeather(any){
    console.log(any);
    if(any.cod=='404'){
        bodyHeader.classList.replace('pending','error');
        bodyHeaderP.innerText = `${inputField.value}  is not a valid City`;
    }
}