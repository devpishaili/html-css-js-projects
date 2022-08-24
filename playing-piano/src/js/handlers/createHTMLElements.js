import { AudioTags } from "../components/AudioTags.js";
import { PianoKeyboard } from "../components/PianoKeys.js";
import { pianoKeyNoteSrc, pianoKeys } from "../data/pianoKeys.js";
import { assignNotes } from "./assignNote.js";

export const createHTMLElements = () => {
  const PianoHTML = document.querySelector(".piano"),
    PianoAudioHTML = document.querySelector(".audio-tags");

  PianoHTML.innerHTML = PianoKeyboard(pianoKeys);
  PianoAudioHTML.innerHTML = AudioTags(pianoKeys, pianoKeyNoteSrc);

  const keys = PianoHTML.querySelectorAll(".key");

  assignNotes(keys);
};
