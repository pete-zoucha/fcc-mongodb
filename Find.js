var mongo = require("mongodb").MongoClient

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
    if (err) throw err;
   db.collection("parrots").find({"age": {$gt: 4}}).toArray(function(err, documents) {
      if (err) throw err;
      console.log(documents);
   });
   db.close();
});