
wrapper = document.querySelector('.wrapper'),
inputField = document.querySelector('.body-input input');

inputField.addEventListener('keyup', e=>{
    if(e.key=='Enter' && inputField.value != ''){
        let inputCity = inputField.value;
        
        const keys = '3f2f9bc259ce45af21bda8132115c015';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${keys}`

        fetch(apiUrl)
        .then(res=>res.json())
        .then(data=>showWeather(data))
    }
})

function showWeather(any){
    console.log(any);
    if(any.cod=='404'){
        
    }
}