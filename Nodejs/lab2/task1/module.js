// create custom module   

// contain function constructor  

// inheriting from emitter   

// this function has on and emit   

// I can send data from emit and log in on function  

const util = require('util');
const EventEmitter = require('events').EventEmitter;

var mod =function () {
    this.events={}
  
}

util.inherits(mod, EventEmitter);

mod.prototype.on = function (type, listener) {
    // check if the listener is a function and throw error if it is not
    if(typeof listener !== "function") {
        throw new Error("Listener must be a function!")
    }
    // create the event listener property (array) if it does not exist.
    this.events[type] = this.events[type] || []; 
    // adds listners to the events array.
    this.events[type].push(listener); 
}

mod.prototype.emit = function(type) {
    if (this.events[type]) { // checks if event is a property on Emitter
        this.events[type].forEach(function(listener) { 
        // loop through that events array and invoke all the listeners inside it.
            listener( );
        })
    }
 }

module.exports=mod;

