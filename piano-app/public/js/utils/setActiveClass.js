export const setActiveClass = (element, status) => {
  if (status === false) element.classList.remove("active");
  else if (status === "toggle") {
    element.classList.toggle("active");
  } else element.classList.add("active");
};
