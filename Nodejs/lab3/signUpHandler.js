class signUpHandler
{
       //write data to file ( data fromsignup.txt)
  constructor()
  {
        this.fs=require('fs');
        this.recievedData='';
        this.hasValueDeep=(json,findValue)=>{
            const values = Object.values(json);
            let hasValue = values.includes(findValue);
            values.forEach(function(value) {
                if (typeof value === "object") {
                    hasValue = hasValue || hasValueDeep(value, findValue);
                }
            })
            return hasValue;
          }

    }
       
  

   handleSignUp(req){
    req.on('data', chunk => {
        this.recievedData+=chunk;
      })
 
      req.on('end', () => {
        
          this.fs.readFile('dataFromSignUp.json', function (err, fileData) {
            var jsonOfFile = JSON.parse(fileData)
            console.log(this)
            const emailExists = this.hasValueDeep(jsonOfFile, JSON.parse(recievedData).Email)
            if(emailExists)
            {
              console.log("email already exists")
              var toWrite="aasdd"
               res.write(toWrite,(err)=>{});
            }else{
              jsonOfFile.push(JSON.parse(recievedData))
 
            }
            
        
            this.fs.writeFile("dataFromSignUp.json", JSON.stringify(jsonOfFile),(err)=>{})
        })
      })
 
  }

   hasValueDeep(json, findValue) {
    const values = Object.values(json);
    let hasValue = values.includes(findValue);
    values.forEach(function(value) {
        if (typeof value === "object") {
            hasValue = hasValue || hasValueDeep(value, findValue);
        }
    })
    return hasValue;
  }
}

exports.default = signUpHandler



