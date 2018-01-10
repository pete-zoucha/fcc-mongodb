var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
var collection = 'prices';
var size = process.argv[2];

mongo.connect(url, function(err, db) {
    if (err) throw err;
   var prices = db.collection(collection);
   prices.aggregate([{$match: {"size": size}}, {$group: {_id: "", total: {$avg: "$price"}}}]).toArray(function (err, results) {
       if (err) throw err;
       console.log(Number(results[0].total).toFixed(2));
   });
   db.close();
});