const express = require("express");
const { connectDB } = require("./utils/db");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");


const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

const startServer = async () => {
  await connectDB();
  app.listen(process.env.PORT || 5000, () => {
    console.log("backend is running!!");
  });
};

startServer();
