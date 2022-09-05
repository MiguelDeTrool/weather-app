import weatherApi from "../weatherApi/weatherApi";
import displayController from "../displayController/displayController";
import apiKey from "../apiKey";

const searchListener = (() => {
  const updateDataAndDisplay = async (e) => {
    // Get search from submitted form elements
    let units = "metric";
    let searchTerm = e.target.elements.location.value.toString();
    let data = await weatherApi.getData(searchTerm, units, apiKey);
    displayController.refreshData(data);
  };

  const addListener = (selector) => {
    let form = document.querySelector(selector);
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
