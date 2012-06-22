var qs = require("querystring"),
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

  var params = '';
  request.on('data', function (data) {
      params += data;
  });
  request.on('end', function () {
	  	console.log("Get the parameters " + params);
      var POST = qs.parse(params);
      console.log("Get the merkItem " + POST.merkItem);
      // save POST.merkItem to db

  });

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("received item:<br/>");
  response.write(params)
  response.end();
}

exports.start = start;
exports.upload = upload;