const express = require("express");

const app = express();

require("dotenv").config();

//console.log(process.env.PORT);

const port = process.env.PORT || 7000;

app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: "wrong routing", data: null });
});

app.listen(port, (err) => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
