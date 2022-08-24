import { setActiveClass } from "../utils/setActiveClass.js";

export const playNote = (key) => {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  setActiveClass(key, true);

  noteAudio.addEventListener("ended", () => setActiveClass(key, false));
};
