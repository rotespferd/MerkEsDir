var querystring = require("querystring"),
    fs = require("fs"),
    url = require("url");

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

  var path = url.parse(request.url, true);
  
  var msg = path.query.merkItem;
  
  console.log("Get the merkItem " + msg);

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("received item:<br/>");
  response.write(msg);
  response.end();
}

exports.start = start;
exports.upload = upload;