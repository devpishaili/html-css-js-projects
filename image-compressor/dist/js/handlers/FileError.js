//   HANDLE FILE ERROR
export const handleFileError = (filename, fileID) => {
  const progress = document.querySelector(`#progress_${filename}_${fileID}`);
  progress.value = 10;
  progress.classList.add("error");
};
