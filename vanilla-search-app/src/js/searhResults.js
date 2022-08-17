export const deleteSearchResluts = () => {
  const parentElement = document.getElementById("searchResults");
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

export const buildSearchResults = (resultArray) => {
  resultArray.forEach((result) => {
    const resultItem = createResultItem(result),
      resultContents = document.createElement("div");
    resultContents.classList.add("result__item--contents");
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContents.append(resultImage);
    }
    const resultText = createResultText(result);
    resultContents.append(resultText);
    resultItem.append(resultContents);
    const searchResults = document.getElementById("searchResults");
    searchResults.append(resultItem);
  });
};

const createResultItem = (result) => {
  const resultItem = document.createElement("div"),
    resultTitle = document.createElement("div"),
    link = document.createElement("a");
  resultItem.classList.add("result__item");
  resultTitle.classList.add("result__item--title");
  link.href = `https://en-wikipedia.org/?curid=${result.id}`;
  link.textContent = result.title;
  link.target = "_blank";
  resultTitle.append(link);
  resultItem.append(resultTitle);
  return resultItem;
};

const createResultImage = (result) => {
  const resultImage = document.createElement("div"),
    img = document.createElement("img");

  resultImage.classList.add("result__item--image");
  img.src = result.img;
  img.alt = result.title;
  resultImage.append(img);
  return resultImage;
};

const createResultText = (result) => {
  const resultText = document.createElement("div"),
    resultDescription = document.createElement("p");

  resultText.classList.add("result__item--text");
  resultDescription.classList.add("result__item--description");
  resultDescription.textContent = result.text;
  resultText.append(resultDescription);
  return resultText;
};

export const setStatsLine = (numberOfResults) => {
  const statLine = document.getElementById("stats");

  if (numberOfResults) {
    setStatsLine.textContent = `Displaying ${numberOfResults} results`;
  } else {
    setStatsLine.textContent = "Sorry, no results";
  }
};
