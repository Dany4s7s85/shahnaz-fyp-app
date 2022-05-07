const { food } = require("./dbConn");

async function DeliveredFood(req, res) {
  const id = req.body.id
  const data = await food.findOneAndUpdate({_id:id}, {status:"delivered"})
  res.end()
}

module.exports = DeliveredFood;
