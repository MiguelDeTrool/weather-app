const weatherApi = (() => {
  const getData = async (searchTerm, units, key) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=${units}&APPID=${key}`;

    try {
      let response = await fetch(url, { mode: "cors" });

      if (response.status === 404) {
        throw new Error("404");
      }

      if (response.status === 400) {
        throw new Error("400");
      }

      let data = await response.json();

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
