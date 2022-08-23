import Counter from "../utils/Counter.js";
import { fsConverter, fsMB } from "../utils/fileSizeConverter.js";
import { uploadFile } from "../utils/uploadFile.js";
import { createResult } from "./PopulateResults.js";

//   HANDLE FILES
export const handleFiles = (fileArray) => {
  const counter = new Counter();

  fileArray.forEach((file) => {
    const fileID = counter.getValue();
    counter.incrementValue();

    if (fsConverter(file.size, fsMB) > 4) return alert("File over 4 MB");
    createResult(file, fileID);
    uploadFile(file, fileID);
  });
};
