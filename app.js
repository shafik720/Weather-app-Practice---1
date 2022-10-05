
wrapper = document.querySelector('.wrapper'),
bodyHeader = document.querySelector('.body-header'),
bodyHeaderP = bodyHeader.querySelector('p'),
locationBtn = document.querySelector('.app-footer button'),
celcius = document.querySelector('.numb'),
inputField = document.querySelector('.body-input input');

inputField.addEventListener('keyup', e=>{
    if(e.key=='Enter' && inputField.value != ''){
        let inputCity = inputField.value;
        
        const keys = '3f2f9bc259ce45af21bda8132115c015';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${keys}&units=metric`;

        bodyHeader.classList.add('pending');
        bodyHeaderP.innerText = `Getting Information ....... `;

        fetch(apiUrl)
        .then(res=>res.json())
        .then(data=>showWeather(data))
    }
})

// working with location button
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

function showWeather(data){
    console.log(data);
    if(data.cod=='404'){
        bodyHeader.classList.replace('pending','error');
        bodyHeaderP.innerText = `${inputField.value}  is not a valid City`;
    }else{
        wrapper.classList.add('active');

        let{temp, humidity, feels_like} = data.main;
        let {name} = data;
        let {main, id} = data.weather[0];
        let {country} = data.sys

        celcius.innerText = Math.floor(temp);
        document.querySelector('.weather').innerText = main;
        document.getElementById('city').innerText = `${name} , ${country}`;
        document.getElementById('celcius').innerText = feels_like;
        document.getElementById('humidity').innerText = humidity;
    }
}