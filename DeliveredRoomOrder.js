const { room } = require("./dbConn");

async function DeliveredRoom(req, res) {
  const id = req.body.id
  const data = await room.findOneAndUpdate({_id:id}, {status:"delivered"})
  res.end()
}

module.exports = DeliveredRoom;
