import weatherApi from "../weatherApi/weatherApi";
import giphyApi from "../giphyApi/giphyApi";
import mainDisplayController from "../displayControllers/mainDisplayController";

const searchListener = (() => {
  const updateDataAndDisplay = async (e) => {
    // Get search from submitted form elements
    const searchTerm = e.target.elements.location.value.toString();
    const units = "metric";
    const data = await weatherApi.getData(searchTerm, units);
    const gifUrl = await giphyApi.getNewUrl(data[0].weather[0].description);
    mainDisplayController.refreshData(data, gifUrl);
  };

  const addListener = (selector) => {
    const form = document.querySelector(selector);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      updateDataAndDisplay(e);
    });
  };

  return {
    addListener,
  };
})();

export default searchListener;

/*
} */
