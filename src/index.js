import "./reset.scss";
import "./styles.scss";

import searchListener from "./searchListener/searchListener";
import weatherApi from "./weatherApi/weatherApi";
import displayController from "./displayController/displayController";

searchListener.addListener("form");

const startup = async () => {
  const units = "metric";
  const searchTerm = "London";
  try {
    const data = await weatherApi.getData(searchTerm, units);
    displayController.refreshData(data);
  } catch (err) {
    console.log(err);
  }
};

startup();
