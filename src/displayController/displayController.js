import { format, fromUnixTime } from "date-fns";

const displayController = (() => {
  // Get all DOM nodes susceptible to editing
  const weatherDesc = document.querySelector(".weather-desc .data");
  const weatherIcon = document.querySelector(".weather-icon");
  const location = document.querySelector(".location .data");
  const time = document.querySelector(".time .data");
  const temp = document.querySelector(".temp .data");
  const feelsLike = document.querySelector(".feels-like .data");
  const humidity = document.querySelector(".humidity .data");
  const pressure = document.querySelector(".pressure .data");
  const windSpeed = document.querySelector(".wind-speed .data");

  const refreshTime = (data) => {
    time.textContent = format(fromUnixTime(data.dt), "PPPP, p");
  };

  const refreshText = (data) => {
    weatherDesc.textContent = data.weather[0].description;
    location.textContent = data.name;
    temp.textContent = data.main.temp;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    feelsLike.textContent = data.main.feels_like;
    humidity.textContent = data.main.humidity;
    pressure.textContent = data.main.pressure / 1000;
    windSpeed.textContent = data.wind.speed;
  };

  const refreshData = (data) => {
    refreshText(data);
    refreshTime(data);
  };

  return {
    refreshData,
  };
})();

export default displayController;
