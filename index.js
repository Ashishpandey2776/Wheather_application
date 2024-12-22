const apikey = "93ccde0e0848fc050203d5ddb5a8fbe1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon=document.querySelector(".weither-icon")
async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apikey}`)
    const data = await response.json();
   // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humiditty").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main=="Cloud"){
               weather_icon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather_icon.src="clear.png";
}
else if(data.weather[0].main=="Rain"){
    weather_icon.src="rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weather_icon.src="drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weather_icon.src="mist.png";
}

}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});


