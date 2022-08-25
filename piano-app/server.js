require("dotenv").config();
const express = require("express"),
  mongoose = require("mongoose"),
  Song = require("./models/songs.js"),
  app = express();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@devpishaili.wweieyr.mongodb.net/songRecorder?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/songs", async (req, res) => {
  const song = new Song({
    notes: req.body.songNotes,
  });

  await song.save();

  res.json(song);
});

app.get("/songs/:id", async (req, res) => {
  let song;

  try {
    song = await Song.findById(req.params.id);
  } catch (error) {
    song = undefined;
  }
  res.render("index", { song: song });
});

app.listen(process.env.PORT || 5000);
