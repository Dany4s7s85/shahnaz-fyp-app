const { room } = require("./dbConn");

function DeleteRoom(req, res) {
  const id = req.body.id
  room.findOneAndDelete({_id:id},(error,result)=>{
    if(error){
      console.log(error)
    }else{
      res.end()
    }
  });
}

module.exports = DeleteRoom;
