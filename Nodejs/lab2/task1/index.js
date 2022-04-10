// create custom module   

// contain function constructor  

// inheriting from emitter   

// this function has on and emit   

// I can send data from emit and log in on function  

var modclass =require("./module.js")
var mod=new modclass();

mod.on("sayHello", () =>{console.log("Hello ! from adham ")});
mod.on("sayHello", () =>{console.log("Hello again ! from adham ")});
mod.emit("sayHello")
