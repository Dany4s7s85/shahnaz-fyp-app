const mongoose = require("mongoose");

const DB =
  "mongodb://ShahnazRafique:Shahnaz12345@cluster0-shard-00-00.tbnru.mongodb.net:27017,cluster0-shard-00-01.tbnru.mongodb.net:27017,cluster0-shard-00-02.tbnru.mongodb.net:27017/restaurant?ssl=true&replicaSet=atlas-f3my88-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema for mongodb
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  cell: {
    type: String,
  },
  people: {
    type: String,
  },
  type: {
    type: String,
  },
  sdate: {
    type: String,
  },
  edate: {
    type: String,
  },
  status: {
    type: String,
  },
});

const room = mongoose.model("Room", roomSchema);

//create schema for mongodb
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  cell: {
    type: String,
  },
  address: {
    type: String,
  },
  dish: {
    type: String,
  },
  weight: {
    type: String,
  },
  date: {
    type: String,
  },
  status: {
    type: String,
  },
});

const food = mongoose.model("Food", foodSchema);

module.exports = { room, food };
