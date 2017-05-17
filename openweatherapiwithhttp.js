var express = require('express');
var app = express();

var bodyParser=require('body-parser');
app.use(bodyParser.json());

var http=require('http');

app.post('/getweather',function(req,res){
var mycity=req.body.city;
console.log(mycity);
var options = {
  host: 'api.openweathermap.org',
  path: '/data/2.5/weather?q='+mycity+'&appid=b75816f84876c67c1faf15aad2b8b48d'
};

http.request(options, function(response) {
    var str='';
    console.log("responding..-..-");
   response.on('data', function (chunk) {
  str += chunk;
  });

  response.on('end', function () {
     str= JSON.parse(str);
     var tic=str.main.temp-273;
    console.log(tic);  
    tic=JSON.stringify(tic);
    res.send(tic);                
    // your code here if you want to use the results !
  });
}).end();
})


app.post('/mad',function(req,res){
  

})

app.listen(70, function () {
   console.log("port enabled")
})