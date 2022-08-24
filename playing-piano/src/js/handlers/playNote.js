export const playNote = (key) => {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
};
