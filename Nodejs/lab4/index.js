const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
var fs=require('fs')
app.set('view engine', 'ejs')
var userData={};

app.listen(port, () => console.log(` app listening on port ${port}!`))


app.get('/', (req, res) => res.redirect('/home'))

app.get('/home', function(req, res){
    res.render('home.ejs')
});

app.post('/signup', function(req, res){
    fs.readFile('dataFromSignUp.json', function (err, fileData) {
        var jsonOfFile = JSON.parse(fileData)
        const emailExists = hasValueDeep(jsonOfFile, req.body.Email)
        if(emailExists)
        {
          res.send(`{"error":"email already exists"}`);
        }else{
          jsonOfFile.push(req.body)
          res.send(`{"success":"user added to succesfully"}`);

        }
        fs.writeFile("dataFromSignUp.json", JSON.stringify(jsonOfFile),(err)=>{})
    })
})

app.post('/login',function(req,res){
    let isCorrectPassword=false;      
    let isCorrectEmail=false;
    fs.readFile('dataFromSignUp.json', function (err, fileData) {
        var jsonOfFile = JSON.parse(fileData)
        isCorrectEmail = hasValueDeep(jsonOfFile, req.body.Email)
        isCorrectPassword = hasValueDeep(jsonOfFile, req.body.password)

        if(isCorrectEmail && isCorrectPassword)
        {
            userData=req.body
            res.redirect('/profile')
        }
        else if(isCorrectEmail && !isCorrectPassword)
        {res.send(`{"error":"wrong password"}`);}


        else if(!isCorrectEmail && isCorrectPassword)
        {res.send(`{"error":"wrong email"}`);}
        
        else if(!isCorrectEmail)
        {res.send(`{"error":"email doesnt exist please signup"}`);}    
    })       
})

app.get('/profile', function(req, res){
   res.render('profile',{name:userData.name})
})


app.get('*', function(req, res){
    res.send(`{"error":"not found"}`)
})

app.post('*', function(req, res){
    res.send(`{"error":"page not found"}`)
})

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