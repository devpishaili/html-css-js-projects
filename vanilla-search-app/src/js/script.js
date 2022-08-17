import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";
import {
  clearPushListener,
  clearSearchText,
  setSearchFocus,
  showClearTextButton,
} from "./searchBar.js";
import {
  buildSearchResults,
  deleteSearchResluts,
  setStatsLine,
} from "./searhResults.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();
  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);
  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  clear.addEventListener("keydown", clearPushListener);
  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

const submitTheSearch = (event) => {
  event.preventDefault();

  deleteSearchResluts();
  processTheSearch();
  setSearchFocus();
};

const processTheSearch = async () => {
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;

  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length) buildSearchResults(resultArray);
  setStatsLine(resultArray.length);
};
