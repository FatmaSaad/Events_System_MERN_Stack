const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const Router = require("./routes/speaker-router");
const app = express();
const apiPort = 2000;
const fileUpload = require("express-fileupload");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/api", Router);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
