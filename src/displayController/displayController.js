import { format, fromUnixTime } from "date-fns";

const displayController = (() => {
  // Get all DOM nodes susceptible to editing
  const weatherDesc = document.querySelector(".weather-desc");
  const location = document.querySelector(".location");
  const time = document.querySelector(".time");
  const temp = document.querySelector(".temp");
  const weatherIcon = document.querySelector(".weather-icon");
  const feelsLike = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const pressure = document.querySelector(".pressure");
  const windSpeed = document.querySelector(".wind-speed");

  const refreshTime = (data) => {
    time.textContent = format(fromUnixTime(data.dt), "PPPP, p");
  };

  const refreshText = (data) => {
    weatherDesc.textContent = data.weather[0].description;
    location.textContent = data.name;
    temp.textContent = data.main.temp;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`;
    feelsLike.textContent = data.main.feels_like;
    humidity.textContent = data.main.humidity;
    pressure.textContent = data.main.pressure;
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
