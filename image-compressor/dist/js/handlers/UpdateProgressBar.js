import { populateResult } from "./PopulateResults.s";

//   UPDATE PROGRESS BAR
export const updateProgressBar = (file, fileID, imgJSON) => {
  const progress = document.querySelector(`#progress_${file.name}_${fileID}`);
  const addProgress = setInterval(() => {
    progress.value += 1;
    if (progress.value === 10) {
      clearInterval(addProgress);
      progress.classList.add("finished");
      populateResult(file, fileID, imgJSON);
    }
  }, 50);
};
