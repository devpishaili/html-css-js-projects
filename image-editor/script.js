const fileInput = document.querySelector(".file-input"),
  filterOptions = document.querySelectorAll(".filter button"),
  filterName = document.querySelector(".filter-info .name"),
  filterValue = document.querySelector(".filter-info .value"),
  filterSlider = document.querySelector(".slider input"),
  rotateOptions = document.querySelectorAll(".rotate button"),
  previewImg = document.querySelector(".preview-img img"),
  resetFilterBtn = document.querySelector(".reset-filter"),
  chooseImgBtn = document.querySelector(".choose-img"),
  saveImgBtn = document.querySelector(".save-img");

let brightness = 100,
  saturation = 100,
  inversion = 0,
  grayscale = 0;

let rotate = 0,
  flipHorizontal = 1,
  flipVertical = 1;

const applyFilters = () => {
  previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
  previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
};

const updateFilter = () => {
  filterValue.innerText = `${filterSlider.value}%`;
  const selectedFilter = document.querySelector(".filter .active");

  if (selectedFilter.id === "brightness") {
    brightness = filterSlider.value;
  } else if (selectedFilter.id === "saturation") {
    saturation = filterSlider.value;
  } else if (selectedFilter.id === "inversion") {
    inversion = filterSlider.value;
  } else {
    grayscale = filterSlider.value;
  }

  applyFilters();
};

const resetFilter = () => {
  // reseting all variable values to their default value
  brightness = 100;
  saturation = 100;
  inversion = 0;
  grayscale = 0;
  rotate = 0;
  flipHorizontal = 1;
  flipVertical = 1;

  filterOptions[0].click();
  applyFilters();
};

const loadImage = () => {
  let file = fileInput.files[0]; // getting user selected file
  if (!file) return; // return if user hasn't selected file on file dialog open
  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener("load", () => {
    resetFilterBtn.click(); // clicking reset btn, so filter value resets, if the user select new img.
    document.querySelector(".container").classList.remove("disable");
  });
};

const saveImage = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = previewImg.naturalWidth;
  canvas.height = previewImg.naturalHeight;

  // applying user selected filters to canvas filter
  ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`; // translating canvas from center
  if (rotate !== 0) {
    // if rotate value isn't 0, rotate the canvas
    ctx.rotate((rotate * Math.PI) / 180);
  }
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(flipHorizontal, flipVertical);
  ctx.drawImage(
    previewImg,
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );
  const link = document.createElement("a"); // creating <a> element;
  link.download = "image.jpg"; // passing <a> tag download value to 'image.jpg'
  link.href = canvas.toDataURL(); // passing <a> tag href to canvas data url
  link.click(); // clicking <a> tag so the image download
};

filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector(".filter .active").classList.remove("active");
    option.classList.add("active");
    filterName.innerHTML = option.innerText;

    if (option.id === "brightness") {
      filterSlider.max = "200";
      filterValue.innerText = `${brightness}%`;
      filterSlider.value = brightness;
    } else if (option.id === "saturation") {
      filterSlider.max = "200";
      filterValue.innerText = `${saturation}%`;
      filterSlider.value = saturation;
    } else if (option.id === "inversion") {
      filterSlider.max = "100";
      filterValue.innerText = `${inversion}%`;
      filterSlider.value = inversion;
    } else {
      filterSlider.max = "100";
      filterValue.innerText = `${grayscale}%`;
      filterSlider.value = grayscale;
    }
  });
});

rotateOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.id === "left") {
      rotate -= 90;
      console.log("right");
    } else if (option.id === "right") {
      rotate += 90;
    } else if (option.id === "horizontal") {
      flipHorizontal = flipHorizontal === 1 ? -1 : 1;
    } else {
      flipVertical = flipVertical === 1 ? -1 : 1;
    }

    applyFilters();
  });
});

fileInput.addEventListener("change", loadImage);
filterSlider.addEventListener("input", updateFilter);
resetFilterBtn.addEventListener("click", resetFilter);
saveImgBtn.addEventListener("click", saveImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());
