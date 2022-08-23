import { handleFiles } from "./HandleFiles.js";

export const handleDrop = (e) => {
  const dt = e.dataTransfer,
    files = dt.files,
    fileArray = [...files];

  if (fileArray.length > 20) return alert("Too many files!");
  handleFiles(fileArray);
};
