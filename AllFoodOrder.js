const { food } = require("./dbConn");
async function SendFoodOrders(req, res) {
  const dbdata = await food.find();
  res.write(JSON.stringify(dbdata));
  res.end();
}

module.exports = SendFoodOrders;
