const express = require("express");
const cors = require("cors");
const path = require("path");
require("./db/mongoose");

//routers
const architectRouter = require("./routers/architect");
const buildingRouter = require("./routers/building");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "../client/build")));

const PORT = process.env.PORT || 5000;

app.use("/api", architectRouter);
app.use("/api", buildingRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`"Listening on port ${PORT}`);
});
