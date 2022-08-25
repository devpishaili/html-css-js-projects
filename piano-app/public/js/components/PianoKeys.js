export const PianoKeyboard = (pianoKeys) =>
  pianoKeys
    .map((key) => `<div data-note="${key.key}" class="key ${key.color}"></div>`)
    .join("");
