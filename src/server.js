const express = require("express");
const cors = require("cors");
const database = require("./models/index.js");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();

var corsOptions = {
    origin: "http://localhost:5000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

database.sequelize.sync().then(() => {
    console.log("re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application." });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});