var express = require('express');
var app= express();
var request = require('request');

// Default engine and extension
app.set('view engine', 'ejs');

app.get("/results", function(req, res){
  request("http://www.omdbapi.com/?s=india&apikey=7b879098", function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      // res.send(data['Search']);
      res.render("movie", {data : data});
    }
  });
});

app.listen(3000, '127.0.0.1', function(){
  console.log("Movie App has started")
});
