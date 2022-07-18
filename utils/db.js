const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection successful"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };
