const WEATHER_API_KEY = "4265adc49990f00c62ad90e3cfbac612";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data)=>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const temperature = parseInt(data.main.temp);
        city.innerText = data.name;
        weatherContainer.innerText =`${data.weather[0].main} / ${temperature}℃`;
    });
}
function onGeoError(){
    alert("Can't find geo info.No weather for you!");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);