var mongo = require("mongodb"),
	Server = mongo.Server,
	Db = mongo.Db;
	
var server = new Server("localhost", 27017, {auto_reconnect: true});
var db = new Db("merkesdirDB", server);

function saveMerkItem(item, user){
	db.open(function(err, db){
	if(!err) {
		console.log("There is a connection to the db");
		
		db.createCollection("merke", function(err, collection) {
			var dbItem = {"item" : item, "user" : user};
		
			collection.insert(dbItem, {safe:true}, function(err, result) {
				if(err) {
					console.log(err);
				}
				console.log(result);
			});
		});
	}
});
}

saveMerkItem("Merke", "admin");

//export from function
exports.saveMerkItem = saveMerkItem;