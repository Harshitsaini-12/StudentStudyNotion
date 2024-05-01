const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Database connection established successfully");
    })
    .catch((err) => {
      console.log("DB connection failed.");
      console.log(err);
      process.exit(1);
    });
};
