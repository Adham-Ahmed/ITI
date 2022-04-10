


 const fs = require('readline');
fs.readLine('greet.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("after readfile")



