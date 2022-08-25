import { AudioTags } from "../components/AudioTags.js";
import { PianoKeyboard } from "../components/PianoKeys.js";
import { pianoKeyNoteSrc, pianoKeys } from "../data/pianoKeys.js";
import { setActiveClass } from "../utils/setActiveClass.js";

let recordingStartTime = Date.now();
let songNotes = currentSong && currentSong.notes;

console.log(currentSong);

const PianoHTML = document.querySelector(".keyboard"),
  PianoAudioHTML = document.querySelector(".audio-tags"),
  recordButton = document.querySelector(".record-button"),
  playButton = document.querySelector(".play-button"),
  saveButton = document.querySelector(".save-button"),
  songLinkButton = document.querySelector(".song-link");

export const createHTMLElements = () => {
  PianoHTML.innerHTML = PianoKeyboard(pianoKeys);
  PianoAudioHTML.innerHTML = AudioTags(pianoKeys, pianoKeyNoteSrc);
  if (recordButton) {
    recordButton.addEventListener("click", () => toggleRecording());
  }
  if (saveButton) {
    saveButton.addEventListener("click", () => saveSong());
  }
  playButton.addEventListener("click", () => playSong());
  songLinkButton.addEventListener("click", () => songLinkSong());

  const keys = document.querySelectorAll(".key");

  /* - - - -  Initiating Function - - - - - */

  assignNotes(keys);
  assignKeys();

  /* - - - - End of Initiating Function - - - - - */

  /* - - - -  KeyMap Function - - - - - */

  const keyMap = [...keys].reduce((map, key) => {
    map[key.dataset.note] = key;
    return map;
  }, {});

  /* - - - - End of KeyMap Function - - - - - */

  function playNote(key) {
    if (isRecording()) recordNote(key.dataset.note);

    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    setActiveClass(key, true);

    noteAudio.addEventListener("ended", () => setActiveClass(key, false));
  }

  /* - - - -  Assign Keys to PC Keyboard Function - - - - - */

  function assignKeys() {
    document.addEventListener("keydown", (e) => {
      if (e.repeat) return;
      const key = e.key;
      let playKey = pianoKeys.find((newKey) => newKey.altKey === key);

      if (playKey) {
        let keyToPlay = document.querySelector(`[data-note=${playKey.key}]`);
        playNote(keyToPlay);
      } else return;
    });
  }

  /* - - - - End of Assign Keys to PC Keyboard Function - - - - - */

  /* - - - -  Assign Keys to Notes Function - - - - - */

  function assignNotes(keys) {
    keys.forEach((key) => {
      key.addEventListener("click", () => {
        playNote(key);
      });
    });
  }

  /* - - - -  End of Assign Keys to Notes Function - - - - - */

  /* - - - -  Recorder Functions - - - - - */

  function toggleRecording() {
    setActiveClass(recordButton, "toggle");

    if (isRecording()) {
      startRecording();
    } else {
      stopRecording();
    }
  }

  function isRecording() {
    return recordButton != null && recordButton.classList.contains("active");
  }

  function startRecording() {
    recordingStartTime = Date.now();
    console.log(recordingStartTime);
    songNotes = [];
    setActiveClass(playButton, false, "show");
    setActiveClass(saveButton, false, "show");
    setActiveClass(songLinkButton, false, "show");
  }

  function stopRecording() {
    playSong();
    setActiveClass(playButton, true, "show");
    setActiveClass(saveButton, true, "show");
  }

  function recordNote(note) {
    songNotes.push({
      key: note,
      startTime: Date.now() - recordingStartTime,
    });
  }

  function playSong() {
    if (songNotes.length === 0) return;

    songNotes.forEach((note) => {
      setTimeout(() => {
        playNote(keyMap[note.key]);
      }, note.startTime);
    });
  }

  /* - - - - End of Recorder Functions - - - - - */

  /* - - - - Save Song Function - - - - - */

  function saveSong() {
    axios.post("/songs", { songNotes: songNotes }).then((res) => {
      setActiveClass(songLinkButton, true, "show");
      songLinkButton.href = `/songs/${res.data._id}`;
    });
  }

  /* - - - - End of Save Song Function - - - - - */
};
