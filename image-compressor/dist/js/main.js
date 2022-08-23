import Counter from "../js/utils/Counter.js";
import { fsConverter, fsMB } from "../js/utils/fileSizeConverter.js";
import { getFileSizeString } from "../js/utils/getFileSizeString.js";
import { uploadFile } from "../js/utils/uploadFile.js";

const counter = new Counter(),
  //   ININTIALIZE APP
  initApp = () => {
    const droparea = document.querySelector(".droparea"),
      active = () => droparea.classList.add("green-border"),
      inActive = () => droparea.classList.remove("green-border"),
      prevents = (e) => {
        e.preventDefault();
      };

    ["dragover", "drop"].forEach((evtName) => {
      droparea.addEventListener(evtName, prevents);
    });

    ["dragenter", "dragover"].forEach((evtName) => {
      droparea.addEventListener(evtName, active);
    });

    ["dragleave", "drop"].forEach((evtName) => {
      droparea.addEventListener(evtName, inActive);
    });

    droparea.addEventListener("drop", handleDrop);
  },
  //   HANDLE DROP
  handleDrop = (e) => {
    console.log("here");

    const dt = e.dataTransfer,
      files = dt.files,
      fileArray = [...files];

    if (fileArray.length > 20) return alert("Too many files!");
    handleFiles(fileArray);
  },
  //   HANDLE FILES
  handleFiles = (fileArray) => {
    fileArray.forEach((file) => {
      const fileID = counter.getValue();
      counter.incrementValue();

      if (fsConverter(file.size, fsMB) > 4) return alert("File over 4 MB");
      createResult(file, fileID);
      uploadFile(file, fileID);
    });
  },
  //   Create Results
  createResult = (file, fileID) => {
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
  //   Display Results
  displayResults = () => {
    const results = document.querySelector(".results");

    if (results.classList.contains("none")) {
      results.classList.remove("none");
      results.classList.add("block");
    }
  },
  //   UPDATE PROGRESS BAR
  updateProgressBar = (file, fileID, imgJSON) => {
    const progress = document.querySelector(`#progress_${file.name}_${fileID}`);
    const addProgress = setInterval(() => {
      progress.value += 1;
      if (progress.value === 10) {
        clearInterval(addProgress);
        progress.classList.add("finished");
        populateResult(file, fileID, imgJSON);
      }
    }, 50);
  },
  // POPULATE RESULTS
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
  },
  // GET PERCENT SAVED
  getPercentSaved = (origFileSize, newFileSize) => {
    const origFS = parseFloat(origFileSize),
      newFS = parseFloat(newFileSize);

    return ((origFS - newFS) / origFS) * 100;
  },
  // Create Download Link
  createDownloadLink = () => {
    const extension = imgJSON.filename.spilt(".").pop(),
      link = document.createElement("a");

    link.href = `data:image/${extension};base64,${imgJSON.base64CompString}`;
    link.download = imgJSON.filename;
    link.textContent = "dowload";
    return link;
  };

document.addEventListener("DOMContentLoaded", initApp);
