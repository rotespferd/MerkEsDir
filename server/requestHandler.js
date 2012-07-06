var qs = require("querystring"),
    fs = require("fs"),
    url = require("url");
    
var db = require("./db");

function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var url = url.parse(request.url, true);
  
  var msg = url.query.merkItem;
  var user = url.query.user;
  
  console.log("Get the merkItem " + msg);
  
  db.saveMerkItem(msg, "marian");


  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("received item:<br/>");
  response.write(params)
  response.end();
}

exports.start = start;
exports.upload = upload;