var mongo = require("mongodb").MongoClient
var databaseName = process.argv[2];
var url = "mongodb://localhost:27017/" + databaseName
var collection = "users"

mongo.connect(url, function(err, db) {
    if (err) throw err;
   var users = db.collection(collection);
   users.update({username: "tinatime"},{$set: {age: 40}}, function (err, data) {
       if (err) throw err;
       
   });
   db.close();
});