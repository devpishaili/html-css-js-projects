export const createDownloadLink = (imgJSON) => {
  const extension = imgJSON.filename.spilt(".").pop(),
    link = document.createElement("a");

  link.href = `data:image/${extension};base64,${imgJSON.base64CompString}`;
  link.download = imgJSON.filename;
  link.textContent = "dowload";
  return link;
};
