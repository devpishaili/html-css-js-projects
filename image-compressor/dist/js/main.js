import { setDropArea } from "./handlers/DropArea.js";
import { handleDrop } from "./handlers/HandleDrop.js";

export const //   ININTIALIZE APP
  initApp = () => {
    setDropArea();

    droparea.addEventListener("drop", handleDrop);
  };

document.addEventListener("DOMContentLoaded", initApp);
