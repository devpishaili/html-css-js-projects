export const setActiveClass = (element, status, className) => {
  if (status === false) element.classList.remove(className || "active");
  else if (status === "toggle") {
    element.classList.toggle(className || "active");
  } else element.classList.add(className || "active");
};
