import "./reset.scss";
import "./styles.scss";

import searchListener from "./searchListener/searchListener";
import weatherApi from "./weatherApi/weatherApi";
import giphyApi from "./giphyApi/giphyApi";
import mainDisplayController from "./displayControllers/mainDisplayController";

searchListener.addListener("form");

const startUp = async () => {
  const units = "metric";
  const searchTerm = "London";
  try {
    const data = await weatherApi.getData(searchTerm, units);
    const gifUrl = await giphyApi.getNewUrl(data[0].weather[0].description);
    mainDisplayController.refreshData(data, gifUrl);
  } catch (err) {
    console.log(err);
  }
};

startUp();
