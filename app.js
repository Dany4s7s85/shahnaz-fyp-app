const express = require("express");
const app = express();
const GetRoom = require("./RoomBoocking");
const GetFood = require("./FoodBoocking");
const SendFoodOrders = require("./AllFoodOrder");
const SendRoomOrders = require("./AllRoomOrder");
const DeleteRoom = require("./CancelRoomOrder");
const DeliveredRoom = require("./DeliveredRoomOrder");
const DeleteFood = require("./CancelFoodOrder");
const DeliveredFood = require("./DeliveredFoodOrder");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
var path = require("path");
app.use(cookieParser());
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());

// Placing order for room
app.post("/room", GetRoom);

// Placing order for food
app.post("/roomdelete", DeleteRoom);

// Placing order for food
app.post("/roomdeliver", DeliveredRoom);

// Placing order for food
app.post("/fooddelete", DeleteFood);

// Placing order for food
app.post("/fooddeliver", DeliveredFood);

// Placing order for food
app.post("/food", GetFood);

// Placing order for food
app.get("/fooddata", SendFoodOrders);

// Placing order for food
app.get("/roomdata", SendRoomOrders);

//this is for heroku don,t touch
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function () {
  console.log("listen port 5000");
});
