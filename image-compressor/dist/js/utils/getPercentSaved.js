// GET PERCENT SAVED
export const getPercentSaved = (origFileSize, newFileSize) => {
  const origFS = parseFloat(origFileSize),
    newFS = parseFloat(newFileSize);

  return ((origFS - newFS) / origFS) * 100;
};
