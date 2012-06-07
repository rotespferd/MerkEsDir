var mongo = require("mongodb"),
	Server = mongo.Server,
	Db = mongo.Db;
	
var server = new Server("localhost", 27017, {auto_reconnect: true});
var db = new Db("merkesdirDB", server);

db.open(function(err, db){
	if(!err) {
		console.log("There is a connection to the db");
	}
});