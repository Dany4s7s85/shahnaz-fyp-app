const { room } = require("./dbConn");
async function SendRoomOrders(req, res) {
  const dbdata = await room.find();
  res.write(JSON.stringify(dbdata));
  res.end();
}

module.exports = SendRoomOrders;
