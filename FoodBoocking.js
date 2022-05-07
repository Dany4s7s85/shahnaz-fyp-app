const { food } = require("./dbConn");
function GetFood(req, res) {
  var data = req.body;
  const { name, cell, address, dish, weight, date } = data;
  const status = "Pending";
  data = { name, cell, address, dish, weight, date, status };
  if (!name || !cell || !address || !dish || !weight || !date) {
    res.end("all fields Required");
  } else {
    const newUser = new food(data);
    newUser.save();
    res.end();
  }
}

module.exports = GetFood;
