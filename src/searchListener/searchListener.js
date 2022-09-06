import weatherApi from "../weatherApi/weatherApi";
import displayController from "../displayController/displayController";

const searchListener = (() => {
  const updateDataAndDisplay = async (e) => {
    // Get search from submitted form elements
    const searchTerm = e.target.elements.location.value.toString();
    const units = "metric";
    const data = await weatherApi.getData(searchTerm, units);
    displayController.refreshData(data);
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
