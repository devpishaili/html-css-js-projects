export const setActiveClass = (element, status) => {
  if (status === false) element.classList.remove("active");
  else element.classList.add("active");
};
