const { room } = require("./dbConn");

function GetRoom(req, res) {
  var data = req.body;
  const { name, cell, people, type, sdate, edate } = data;
  const status = "Pending";
  data = { name, cell, people, type, sdate, edate, status };
  if (!name || !cell || !people || !type || !sdate || !edate) {
    res.end("all fields Required");
  } else {
    const newUser = new room(data);
    newUser.save();
    res.end();
  }
}

module.exports = GetRoom;
