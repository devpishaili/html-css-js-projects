const express = require("express");
const path = require("path");

const app = express();
const PORT = 5080;

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`App running at http://localhost:${PORT}`)
);
