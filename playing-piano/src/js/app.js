import { assignKeys } from "./handlers/assignKeys.js";
import { createHTMLElements } from "./handlers/createHTMLElements.js";

const initApp = () => {
  createHTMLElements();
  assignKeys();
};

document.addEventListener("DOMContentLoaded", initApp);
