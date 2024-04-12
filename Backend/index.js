const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Router = require("./routes.js");

const app = express();


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', Router);

dotenv.config();

mongoose
  .connect(`mongodb+srv://vijaytanwar952:${process.env.PASSWORD}@cluster0.n2ujqg9.mongodb.net/`)
  .then(() => {
    app.listen(process.env.PORT, () => console.log("Server started"));
  })
  .catch((err) => console.error("Unable to connect to database:", err));
