import apiKey from "../apiKey";

const weatherApi = (() => {
  const getData = async (searchTerm, units) => {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=${units}&APPID=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&units=${units}&APPID=${apiKey}`;

    try {
      const responses = await Promise.all([
        fetch(currentUrl, { mode: "cors" }),
        fetch(forecastUrl, { mode: "cors" }),
      ]);

      const currentResponse = responses[0];
      const forecastResponse = responses[1];

      if (currentResponse.status === 404 || forecastResponse.status === 404) {
        throw new Error("404");
      }

      if (currentResponse.status === 400 || forecastResponse.status === 400) {
        throw new Error("400");
      }

      const data = await Promise.all([
        currentResponse.json(),
        forecastResponse.json(),
      ]);

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getData,
  };
})();

export default weatherApi;
