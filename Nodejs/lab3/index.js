var http = require('http');
var fs = require('fs');
const { URL } = require('url');

var recievedData='';
http.createServer(function (req, res) {

   
      req.on('data', chunk => {
        recievedData+=chunk;

      })


  if(req.method=='GET' && req.url==='/' )
  {
    res.writeHead(301, {
        Location: `http://127.0.0.1:8081/home`
      })
  }


  else if(req.method=='GET' && req.url==='/home')
  {
    var fs = require('fs');
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
            const emailExists = hasValueDeep(jsonOfFile, JSON.parse(recievedData).Email)
            if(emailExists)
            {
              var toWrite=`{"error":"email already exists"}`
              res.write(toWrite,(err)=>{});
              res.end();
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
     let isCorrectEmail=false;
     let isCorrectPassword=false;
       req.on('data', chunk => {
         recievedData+=chunk;

       })
       
 
       req.on('end', function() {
         
           fs.readFile('dataFromSignUp.json', function (err, fileData) {
             var jsonOfFile = JSON.parse(fileData)
              isCorrectEmail = hasValueDeep(jsonOfFile, JSON.parse(recievedData).Email)
              isCorrectPassword = hasValueDeep(jsonOfFile, JSON.parse(recievedData).password)
             if(isCorrectEmail && isCorrectPassword)
             {
              // redirect to profile
              
              res.writeHead(301, {
                Location: `http://127.0.0.1:8081/profile`
              })
              res.end();
          
             }
             else if(isCorrectEmail && !isCorrectPassword)
             {
              res.writeHead(400)
              var toWrite=`{"error":"wrong password"}`
              res.write(toWrite,(err)=>{});
              res.end();

             }

             else if(!isCorrectEmail && isCorrectPassword)
             {
              res.writeHead(400)
              var toWrite=`{"error":"wrong email"}`
              res.write(toWrite,(err)=>{});
              res.end();

             }
             else if(!isCorrectEmail)
             {
              res.writeHead(400)
              var toWrite=`{"error":"email doesnt exist please signup"}`
              res.write(toWrite,(err)=>{});
              res.end();

             }           
         
         })
       })


      
 
  }
  
  else if( req.url==='/profile')
  {   
    var fs=require('fs')
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html=fs.readFileSync("./profile.html", 'utf8');
    html=html.replace(`{name}`,`${JSON.parse(recievedData).name}`)
        res.write(html)
        res.end();


  }
  else{
    
     res.writeHead(404)
     var toWrite=`{"error":"not found"}`
     res.write(toWrite,(err)=>{});
     res.end();

  }


  
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