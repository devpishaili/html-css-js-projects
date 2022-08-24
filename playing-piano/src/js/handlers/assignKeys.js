import { pianoKeys } from "../data/pianoKeys.js";
import { playNote } from "./playNote.js";

export const assignKeys = () => {
  document.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    const key = e.key;
    let playKey = pianoKeys.find((newKey) => newKey.altKey === key);

    if (playKey) {
      let keyToPlay = document.querySelector(`[data-note=${playKey.key}]`);
      playNote(keyToPlay);
    } else return;
  });
};
