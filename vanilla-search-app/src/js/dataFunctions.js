export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").value.trim(),
    regex = /[ ]{2,}/gi,
    searchTerm = rawSearchTerm.replaceAll(regex, " ");
  return searchTerm;
};

export const retrieveSearchResults = async (searchTerm) => {
  const wikiSearchSring = getWikiSearchString(searchTerm);
};

const getWikiSearchString = (searchTerm) => {
  const maxChars = getMaxChars();
};

const getMaxChars = () => {
  const width = window.innerwWidth || document.body.clientWidth;
  let maxChars;

  const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
  if (width < 414) maxChars = 65;
  if (width >= 414 && width < 1400) maxChars = 100;
  if (width > 1400) maxChars = 130;
};
