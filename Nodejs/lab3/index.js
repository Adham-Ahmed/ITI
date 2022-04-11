var http = require('http');
var fs = require('fs');
const { URL } = require('url');


http.createServer(function (req, res) {

  if(req.method=='GET' && req.url==='/' )
  {
    res.writeHead(301, {
        Location: `http://127.0.0.1:8081/home`
      })
  }


  else if(req.method=='GET' && req.url==='/home')
  {
  res.writeHead(200, {'Content-Type': 'text/html'});
    var html=fs.readFileSync("./home.html", 'utf8');
        res.write(html)
  }

  
  
  else if(req.method=='POST' && req.url==='/signup')
  {
    //write data to file ( data fromsignup.txt)
    var fs=require('fs')
    let recievedData='';
      req.on('data', chunk => {
        recievedData+=chunk;
      })

      req.on('end', () => {
        
          fs.readFile('dataFromSignUp.json', function (err, fileData) {
            var jsonOfFile = JSON.parse(fileData)
            // console.log(JSON.parse(recievedData).Email);
            const emailExists = hasValueDeep(jsonOfFile, JSON.parse(recievedData).Email)
            if(emailExists)
            {
              console.log("email already exists")
              // var toWrite="aasdd"
              // res.write(toWrite,(err)=>{});
            }else{
              jsonOfFile.push(JSON.parse(recievedData))

            }
            
        
            fs.writeFile("dataFromSignUp.json", JSON.stringify(jsonOfFile),(err)=>{})
        })
      })
  }
  
  else if(req.method=='POST' && req.url==='/login')
  {
     //write data to file ( data fromsignup.txt)
     var fs=require('fs')
     let recievedData='';
       req.on('data', chunk => {
         recievedData+=chunk;
       })
       
 
       req.on('end', () => {
         
           fs.readFile('dataFromSignUp.json', function (err, fileData) {
             var jsonOfFile = JSON.parse(fileData)
             // console.log(JSON.parse(recievedData).Email);
             const isCorrectEmail = hasValueDeep(jsonOfFile, JSON.parse(recievedData).Email)
             const isCorrectPassword = hasValueDeep(jsonOfFile, JSON.parse(recievedData).password)
             if(isCorrectEmail && isCorrectPassword)
             {
              // redirect to profile
              console.log("to profile")
              res.write("asasd")
              res.writeHead(301, {
                Location: `http://127.0.0.1:8081/profile`
              })
               
             }else{
                console.log("data invalid") 
             }
             
         
             fs.writeFile("dataFromSignUp.json", JSON.stringify(jsonOfFile),(err)=>{})
         })
       })
 
 
  }
  
  else if(req.method=='GET' && req.url==='/profile')
  {

  }


  res.end();
})
.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');




function hasValueDeep(json, findValue) {
  const values = Object.values(json);
  let hasValue = values.includes(findValue);
  values.forEach(function(value) {
      if (typeof value === "object") {
          hasValue = hasValue || hasValueDeep(value, findValue);
      }
  })
  return hasValue;
}