    //  // var socket = io.connect('localhost:3000')

    //     //simple logic
    //     socket.on('connected', function(data){
    //       // console.log('successed joined')
          
    //       nickname = prompt('what is your nick name')
    //       socket.emit('join', nickname)
    //     })


    //     socket.on('messages', function(data){
    //       // document.getElementById('chatRoom').innerHTML = "broadcast with out client"
    //       console.log(`msg recieved:${data}`)
    //       document.getElementById('chatRoom').innerHTML += "<br>"+` : `+ data //${nickname}
    //       document.getElementById('Room').innerHTML += "<br>"+ data

    //     });
    //     //
    //     //
    //     socket.on('msg', function(data){
    //       // document.getElementById('client').innerHTML = "welcome to client"
    //       document.getElementById('client').innerHTML += "<br>"+ data
    //       document.getElementById('Room').innerHTML += "<br>"+ data
    //     })
       
    //     function sendMessage(){
    //       var messageToSend = document.getElementById('inputField').value
    //       socket.emit('message', messageToSend)
    //     }