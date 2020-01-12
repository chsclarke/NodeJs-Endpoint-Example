// =====================================================
//  Created on 1/11/2020
//  Copyright © 2020 Chase Clarke. All rights reserved.
// =====================================================

var http = require("http");
var url = require("url");
var fs = require("fs");

var WEBPORT = 8080;

console.log(">> Initializing server on port: " + WEBPORT);

// function below creates server object and begins listening
http.createServer(function (req, res) {

  // "parse" seperates the url path and url args into a usable JSON object
  var q = url.parse(req.url, true);
  // filename used to return html webpages
  var filename = "static/" + q.pathname;


  // "/weather" endpoint
  // example: http://localhost:3000/weather?ID=1
  if (q.pathname == "/weather") {
    res.setHeader("Content-Type", "application/json");    

    if (q.query.ID) {
      console.log(">> Retrieiving data @ ID: " + q.query.ID);
      var temp = getTemp(q.query.ID);
      return res.end(temp);
    }

    else
      return res.end("{ \"ERROR\" : \"you must enter a tempId\"}");
  }

  // if not "/weather", look for html page within /static path to return to web browser
  // most useful for redirects to a 404 page.
  else{
    fs.readFile(filename, function(err, data) {
      if (err) {
        fs.readFile("static/404.html", function(err, data) {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.write(data);
          return res.end();
        });
      }
      else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
      }
  });
}

}).listen(WEBPORT);

// getTemp function returns mock data as a JSON object
function getTemp(ID) {
  if (ID == "1")
    return "{ \"tempId\" : " + ID + ", \"tempValue\" : 75 }"; 
  else if (ID == "2")
    return "{ \"tempId\" : " + ID + ", \"tempValue\" : 60 }"; 
  else if (ID == "3")
    return "{ \"tempId\" : " + ID + ", \"tempValue\" : 51 }"; 
  else
    return "{ \"ERROR\" : \"tempId does not exist\"}"; 
}
