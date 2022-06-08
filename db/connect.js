const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, { useNewUrlparser: true })
    .then(() => console.log("Db connected"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
