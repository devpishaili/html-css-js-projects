const fileInput = document.querySelector(".file-input"),
  filterOptions = document.querySelectorAll(".filter button"),
  filterName = document.querySelector(".filter-info .name"),
  filterValue = document.querySelector(".filter-info .value"),
  filterSlider = document.querySelector(".slider input"),
  previeImg = document.querySelector(".preview-img img"),
  chooseImgBtn = document.querySelector(".choose-img");

let brightness = 100,
  saturation = 100,
  inversion = 0,
  grayscale = 0;

const loadImage = () => {
  let file = fileInput.files[0]; // getting user selected file
  if (!file) return; // return if user hasn't selected file on file dialog open
  previeImg.src = URL.createObjectURL(file);
  previeImg.addEventListener("load", () => {
    document.querySelector(".container").classList.remove("disable");
  });
};

filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector(".filter .active").classList.remove("active");
    option.classList.add("active");
    filterName.innerHTML = option.innerText;

    if (option.id === "brightness") {
      filterSlider.max = "200";
      filterValue.innerText =`${brightness}%` ;
      filterSlider.value = brightness;
    } else if (option.id === "saturation") {
      filterSlider.max = "200";
      filterValue.innerText = `${saturation}%`;
      filterSlider.value =saturation ;
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
};

fileInput.addEventListener("change", loadImage);
filterSlider.addEventListener("input", updateFilter);
chooseImgBtn.addEventListener("click", () => fileInput.click());
