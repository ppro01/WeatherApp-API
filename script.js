const APIKey = "03ee15bcaa69fad3b353c03c2d55cd6f";
const searchbar = document.querySelector("#searchbar");
const searchbutton = document.querySelector(".searchbarbtn");
const InfoImg = document.querySelector(".InfoImg");
const Localname = document.querySelector("#name");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const maxtemp = document.querySelector("#maxtemp");
const mintemp = document.querySelector("#mintemp");
const windspeed = document.querySelector("#windspeed");

searchbutton.addEventListener("click", function () {
  var cidade = searchbar.value;
  if (cidade != "") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKey}&units=metric&lang=pt_br`
    )
      .then((response) => response.json())
      .then((json) => {
        Localname.innerHTML =
          '<i class="fa-solid fa-location-dot"></i> ' + json.name;
        temperature.innerHTML =
          '<i class="fa-solid fa-temperature-full"></i> ' +
          json.main.temp.toFixed(0) +
          "°C";
        description.innerHTML =
          `<img src="https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png"></img>` +
          json.weather[0].description;
        maxtemp.innerHTML =
          '<i class="fa-solid fa-temperature-arrow-up"></i>' +
          json.main.temp_max.toFixed(0);
        mintemp.innerHTML =
          '<i class="fa-solid fa-temperature-arrow-down"></i>' +
          json.main.temp_min.toFixed(0);
        windspeed.innerHTML =
          '<i class="fa-solid fa-wind"></i>' + json.wind.speed + "m/s";
      });
  } else {
    alert("insira um nome no campo.");
  }
});
