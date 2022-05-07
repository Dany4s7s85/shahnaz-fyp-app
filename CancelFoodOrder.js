const { food } = require("./dbConn");

async function DeleteFood(req, res) {
  const id = req.body.id
  food.findOneAndDelete({_id:id},(error,result)=>{
    if(error){
      console.log(error)
    }else{
      res.end()
    }
  });
}

module.exports = DeleteFood;
