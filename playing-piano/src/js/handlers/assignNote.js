import { playNote } from "./playNote.js";

export const assignNotes = (keys) => {
  keys.forEach((key) => {
    key.addEventListener("click", () => playNote(key));
  });
};
