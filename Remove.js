var mongo = require("mongodb").MongoClient
var databaseName = process.argv[2];
var url = "mongodb://localhost:27017/" + databaseName
var collection = process.argv[3];
var id = process.argv[4];

mongo.connect(url, function(err, db) {
    if (err) throw err;
   var users = db.collection(collection);
   users.remove({_id: id}, function (err, data) {
       if (err) throw err;
       
   });
   db.close();
});