const fs=require("fs");
var myWriteStream=fs.createWriteStream("info.txt")
var msg="hello iti"
myWriteStream.write(msg)