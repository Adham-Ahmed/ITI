//Async
var fs = require('fs');
fs.readFile('data.json', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});


console.log("file read ASYNC done");

//Sync
var fs = require('fs');
var data = fs.readFileSync('data.json');
console.log(data.toString());


console.log("file read SYNC done");

