import "./reset.scss";
import "./styles.scss";

import searchListener from "./searchListener/searchListener";
import weatherApi from "./weatherApi/weatherApi";
import mainDisplayController from "./displayControllers/mainDisplayController";

searchListener.addListener("form");

const startUp = async () => {
  const units = "metric";
  const searchTerm = "London";
  try {
    const data = await weatherApi.getData(searchTerm, units);
    mainDisplayController.refreshData(data);
  } catch (err) {
    console.log(err);
  }
};

startUp();
