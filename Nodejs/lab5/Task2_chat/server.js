var express = require('express')
// next session
var app = new express()
//
var http = require('http').createServer(app)
var io = require('socket.io')(http)
app.use(express.static('./static/'));

// connect
io.on('connect', function(client){
  client.emit('connected')

  client.on('join', function(name){
    // added property name
		client.nickname = name;
	})

// // below is from send button !
  client.on('message', function(InputFieldData){
  //  client.emit('msg', 'Push notwewerification') //sent to connected client-
// //     //message
     client.broadcast.emit('messages',"<strong>"+client.nickname +"</strong>"+ ' : ' + InputFieldData) //--> all clients except connected client
// //     //
    // io.sasdockets.emit('all', InputFieldData) //for all
    io.emit('all', InputFieldData) //for all

    var nickname = client.nickname ;
      client.emit('msg', InputFieldData)
// // //
  })
})
// //
app.get('/', function(req, res){
  res.sendFile(__dirname+'/static/client.html')
})


 

http.listen(3000,()=>{console.log("server running on port 3000")})

//https://socket.io/get-started/chat
