export const pianoKeys = [
  {
    key: "C",
    color: "white",
  },
  {
    key: "Db",
    color: "black",
  },
  {
    key: "D",
    color: "white",
  },
  {
    key: "Eb",
    color: "black",
  },
  {
    key: "E",
    color: "white",
  },
  {
    key: "F",
    color: "white",
  },
  {
    key: "Gb",
    color: "black",
  },
  {
    key: "G",
    color: "white",
  },
  {
    key: "Ab",
    color: "black",
  },
  {
    key: "A",
    color: "white",
  },
  {
    key: "Bb",
    color: "black",
  },
  {
    key: "B",
    color: "white",
  },
];

export const pianoKeyNoteSrc = (key) => {
  return `/assets/audio/notes/${key}.mp3`;
};
