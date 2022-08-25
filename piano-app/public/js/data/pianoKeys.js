export const pianoKeys = [
  {
    key: "C",
    color: "white",
    altKey: "z",
  },
  {
    key: "Db",
    color: "black",
    altKey: "s",
  },
  {
    key: "D",
    color: "white",
    altKey: "x",
  },
  {
    key: "Eb",
    color: "black",
    altKey: "d",
  },
  {
    key: "E",
    color: "white",
    altKey: "c",
  },
  {
    key: "F",
    color: "white",
    altKey: "v",
  },
  {
    key: "Gb",
    color: "black",
    altKey: "g",
  },
  {
    key: "G",
    color: "white",
    altKey: "b",
  },
  {
    key: "Ab",
    color: "black",
    altKey: "h",
  },
  {
    key: "A",
    color: "white",
    altKey: "n",
  },
  {
    key: "Bb",
    color: "black",
    altKey: "j",
  },
  {
    key: "B",
    color: "white",
    altKey: "m",
  },
];

export const pianoKeyNoteSrc = (key) => {
  return `/audio/notes/${key}.mp3`;
};
