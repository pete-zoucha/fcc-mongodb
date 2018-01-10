var mongo = require("mongodb").MongoClient
var firstName = process.argv[2];
var lastName = process.argv[3];
var url = "mongodb://localhost:27017/learnyoumongo"
var collection = "docs"

mongo.connect(url, function(err, db) {
    if (err) throw err;
   var users = db.collection(collection);
   var newUser = {'firstName': firstName, 'lastName': lastName};
   users.insert(newUser, function(err, data) {
      if (err) throw err;
      console.log(JSON.stringify(newUser));
   });
   console.log(JSON.stringify(newUser));
   db.close();
});