var express = require('express');
var app = express();

var bodyParser=require('body-parser');
app.use(bodyParser.json());

var request=require('request');

app.post('/getweather',function(req,res){
var mycity=req.body.city;
console.log(mycity);


request('http://api.openweathermap.org/data/2.5/weather?q='+mycity+'&appid=b75816f84876c67c1faf15aad2b8b48d', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  //console.log('body:', body); // Print the HTML for the Google homepage.
  var s=JSON.parse(body); 
  console.log(s.main.temp-273);
   var b=s.main.temp-273;
  b=JSON.stringify(b);
  res.send(b);
});

})


app.post('/mad',function(req,res){
  

})

app.listen(70, function () {
   console.log("port enabled")
})
