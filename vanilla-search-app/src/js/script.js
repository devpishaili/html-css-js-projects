import { getSearchTerm } from "./dataFunctions";
import { setSearchFocus } from "./searchBar";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // set the focus
  setSearchFocus();

  // 3 listeners clear text

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

// Procedural 'workflow' function
const submitTheSearch = (event) => {
  event.preventDefault();

  //   delete search results
  processTheSearch();

  setSearchFocus();
};

// Procdedural
const processTheSearch = async () => {
  // clear the stats line
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;

  const resultArray = await retrieveSearchResults(searchTerm);
};
