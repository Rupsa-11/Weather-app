const apiKey = "0260240d323d87fc63edb94186312eec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const Searchbox = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const Weathericon = document.querySelector(".cloud");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if (data.weather[0].main == "Clouds") {
      Weathericon.src = "https://banner2.cleanpng.com/20180401/lbe/kisspng-weather-forecasting-computer-icons-android-cloudy-5ac06fdd4ef478.3508471015225609893234.jpg"
    }
    else if (data.weather[0].main == "Clear") {
      Weathericon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChtvgTWeol0UveBgQr4GzVsBuzeU6dKdudA&usqp=CAU"
    }
    else if (data.weather[0].main == "Rain") {
      Weathericon.src = "https://toppng.com/uploads/preview/rain-cloud-weather-icon-png-clip-art-transparent-background-rain-clipart-11563114842tvlqz23vxh.png"
    }
    else if (data.weather[0].main == "Drizzle") {
      Weathericon.src = "https://thumbnail.imgbin.com/23/13/21/imgbin-cloud-rain-drizzle-wet-season-cloud-2D2p4ERSeqbY6QbTsjECX6DCx_t.jpg"
    }
    else if (data.weather[0].main == "Mist") {
      Weathericon.src = "https://clipart-library.com/newhp/dream-mist-clouds-china-wind-ink.jpg"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

}
Searchbtn.addEventListener("click", () => {
  checkWeather(Searchbox.value)
})

