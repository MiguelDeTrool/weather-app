import "./reset.scss";
import "./styles.scss";

import searchListener from "./searchListener/searchListener";

searchListener.addListener("form");

document.querySelector("form>button").click();
