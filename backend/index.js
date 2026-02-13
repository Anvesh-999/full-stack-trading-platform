require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { userVerification } = require("./Middlewares/AuthMiddleware");

const HoldingsModel = require('./model/HoldingsModel');
const PositionsModel = require('./model/PositionsModel');
const OrdersModel = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri= process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000", // frontend
    "http://localhost:3001"  // dashboard
  ],
  credentials: true,
}));

app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.json());


app.use("/", authRoute);
// app.use((req, res, next) => {
//   console.log("Incoming cookies:", req.cookies);
//   next();
// });


app.get('/allHoldings',userVerification, async (req, res) => {
  const allHoldings =  await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions',userVerification, async (req, res) => {
  const allPositions =  await PositionsModel.find({});
  res.json(allPositions);
});
app.get("/allOrders",userVerification, async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
});


app.post('/newOrder', async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send('Order placed');
});

app.get("/orders", userVerification,async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
  mongoose.connect(uri);
  console.log('Connected to MongoDB');
});

