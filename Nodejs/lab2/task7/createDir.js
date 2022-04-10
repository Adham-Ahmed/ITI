const fs=require("fs");
//creating 5 directories => newDir0 ,newDir1 ...
for (let i = 0; i < 5; i++)  {
    
    fs.mkdir(`./newDir${i}`,(err)=>{
        console.log("error:"+err) 

})
    
}