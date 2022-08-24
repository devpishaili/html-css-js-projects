export const AudioTags = (pianoKeys, audioSrc) =>
  pianoKeys
    .map((key) => `<audio src=${audioSrc(key.key)} id=${key.key}></audio>`)
    .join("");
