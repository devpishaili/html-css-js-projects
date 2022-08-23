export const setDropArea = () => {
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
};
