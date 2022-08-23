import { baseSize, fsConverter, fsKB, fsMB } from "./fileSizeConverter.js";

export const getFileSizeString = (fileSize) => {
  const sizeInKB = fsConverter(fileSize, fsKB),
    sizeInMB = fsConverter(fileSize, fsMB);

  return sizeInKB > baseSize
    ? `${sizeInMB.toFixed(1)} MB`
    : `${sizeInKB.toFixed(1)} KB`;
};
