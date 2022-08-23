import { getFileSizeString } from "../utils/getFileSizeString.js";
import { getPercentSaved } from "../utils/getPercentSaved.js";

// Create Result
export const createResult = (file, fileID) => {
    const origFileSizeString = getFileSizeString(file.size);

    const p1 = document.createElement("p");
    p1.className = "results__title";
    p1.textContent = file.name;

    const p2 = document.createElement("p");
    p2.id = `orig_size_${file.name}_${fileID}`;
    p2.className = "results__size";
    p2.textContent = origFileSizeString;

    const divOne = document.createElement("div");
    divOne.appendChild(p1);
    divOne.appendChild(p2);

    const progress = document.createElement("progress");
    progress.id = `progress_${file.name}_${fileID}`;
    progress.className = `results__bar`;
    progress.max = 10;
    progress.value = 0;

    const p3 = document.createElement("p");
    p3.id = `new_size_${file.name}_${fileID}`;
    p3.className = `results__size`;

    const p4 = document.createElement("p");
    p4.id = `download_${file.name}_${fileID}`;
    p4.className = `results__download`;

    const p5 = document.createElement("p");
    p5.id = `saved_${file.name}_${fileID}`;
    p5.className = `results__saved`;

    const divDL = document.createElement("div");
    divDL.className = `divDL`;
    divDL.appendChild(p4);
    divDL.appendChild(p5);

    const divTwo = document.createElement("div");
    divTwo.appendChild(p3);
    divTwo.appendChild(divDL);

    const li = document.createElement("li");
    li.appendChild(divOne);
    li.appendChild(progress);
    li.appendChild(divTwo);

    document.querySelector(".results__list").appendChild(li);
    displayResults();
  },
  //   ............
  // Display Result
  displayResults = () => {
    const results = document.querySelector(".results");

    if (results.classList.contains("none")) {
      results.classList.remove("none");
      results.classList.add("block");
    }
  },
  // Populate Result
  populateResult = (file, fileID, imgJSON) => {
    const newFileSizeString = getFileSizeString(imgJSON.fileSize),
      percentSaved = getPercentSaved(file.size, imgJSON.fileSize),
      newSize = document.querySelector(`#new_size_${file.name}_${fileID}`),
      download = document.querySelector(`#download_${file.name}_${file.size}`),
      link = createDownloadLink(imgJSON),
      saved = document.querySelector(`#saved_${file.name}_${file.size}`);

    newSize.textContent = newFileSizeString;
    download.appendChild(link);
    saved.textContent = `-${Math.round(percentSaved)}%`;
  };
