import { format, fromUnixTime } from "date-fns";

const mainDisplayController = (() => {
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

  const forecast = document.querySelector(".forecast");

  const refreshCurrent = (data) => {
    weatherDesc.textContent = data.weather[0].description;
    location.textContent = data.name;
    temp.textContent = Math.round(data.main.temp);
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    time.textContent = format(fromUnixTime(data.dt), "PPPP, p");

    feelsLike.textContent = Math.round(data.main.feels_like);
    humidity.textContent = data.main.humidity;
    pressure.textContent = data.main.pressure / 1000;
    windSpeed.textContent = data.wind.speed;
  };

  const refreshForecast = (data) => {
    console.log(fromUnixTime(data.list[8].dt));
    const days = Array.from(forecast.querySelectorAll(".day"));

    for (let i = 0; i < days.length; i++) {
      const dayName = days[i].querySelector(".day-name");
      const temp = days[i].querySelector(".temp");
      const icon = days[i].querySelector(".icon");

      dayName.textContent = format(
        fromUnixTime(data.list[i * 8].dt),
        "PP"
      ).substring(0, 5);
      temp.textContent = Math.round(data.list[i * 8].main.temp);
      icon.src = `https://openweathermap.org/img/wn/${
        data.list[i * 8].weather[0].icon
      }@2x.png`;
    }
  };

  const refreshData = (data) => {
    refreshCurrent(data[0]);
    refreshForecast(data[1]);
  };

  return {
    refreshData,
  };
})();

export default mainDisplayController;
