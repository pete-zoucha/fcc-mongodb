var mongo = require("mongodb").MongoClient
var ageIn = parseInt(process.argv[2]);
var url = "mongodb://localhost:27017/learnyoumongo"
var collection = 'parrots';

mongo.connect(url, function(err, db) {
    if (err) throw err;
   var parrots = db.collection(collection);
   parrots.count({"age": {$gt: ageIn}}, function (err, count) {
       if (err) throw err;
       console.log(count);
   });
   db.close();
});