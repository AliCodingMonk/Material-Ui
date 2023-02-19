const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { UserModel } = require("./models/User");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://ali:ali123@nutnose.cku3z2q.mongodb.net/Material-Ui-Apps"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
