const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require ("./controllers")
const app = express();

// TODO: add models

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use('/api', routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});