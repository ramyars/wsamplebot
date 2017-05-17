var express = require('express');
var app = express();

var mongoclient=require('mongodb').MongoClient;
var mydbobj;

var bodyParser=require('body-parser');
app.use(bodyParser.json());

mongoclient.connect('mongodb://localhost/iPeriscope',function(err,db){
if(err) console.log("error triggered");
else {
console.log(db+" connected");
mydbobj=db.collection('employee');
   
}
})


app.post('/create',function(req,res){
 var toi=req.body;
mydbobj.insert(toi,function(err, data){
  if(err){
    console.log("error occured  ");
  }
  else{
   //console.log(data);
   res.send("inserted");
  }
});

})

app.get('/read',function(req,res){
mydbobj.find({employee_id:'O3W'}).toArray(function(err, data){
  if(err){
    console.log("error occured  ");
  }
  else{
   console.log(data);
  // res.send("hello "+data[0].employee_name);
  res.send(data);
  }
});

})

app.put('/update',function(req,res){
var toi=req.body;
//res.send(toi);

 mydbobj.update({ employee_id: req.body.employee_id },toi, function (err, data) {
    if (err) {
      console.log("error occured  ");
    }
    else {
      //console.log(data);
      res.send("updated");
    }
  }
  )

});

app.delete('/delete',function(req,res){
var toi=req.body;
mydbobj.remove(toi,function(err, data){
  if(err){
    console.log("error occured  ");
  }
  else{
   //console.log(data);
   res.send("removed");
  }
});

})


app.listen(70, function () {
   console.log("port enabled")
})

