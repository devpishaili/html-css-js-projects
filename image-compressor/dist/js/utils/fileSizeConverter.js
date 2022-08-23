export const baseSize = 1024;

export const fsConverter = (fileSize, convertTo) => {
  if (convertTo == fsKB) {
    return parseFloat(fileSize) / baseSize;
  }
  if (convertTo == fsMB) {
    return parseFloat(fileSize) / baseSize / baseSize;
  }
};

export const fsKB = "KB" || "kb",
  fsMB = "mb" || "MB";
