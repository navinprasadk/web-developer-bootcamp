var express = require('express');
var app= express();
var request = require('request');

// Default engine and extension
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("search");
});

app.get("/results", function(req, res){
  // Getting the search input  from '/' route and stored it in 'query' variable
  var query = req.query.movie;
  var url = 'http://www.omdbapi.com/?s=' +query+ '&apikey=7b879098';

  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      // res.send(data['Search']);
      res.render("movie", {data : data});
    }
  });
});

app.listen(3000, '127.0.0.1', function(){
  console.log("Movie App has started on 3000 port")
});
