import { createHTMLElements } from "./handlers/createHTMLElements.js";

const initApp = () => {
  createHTMLElements();
};

document.addEventListener("DOMContentLoaded", initApp);
