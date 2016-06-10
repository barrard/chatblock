	
	  var socket = io();
	  socket.on('connection', function (data) {
	  	console.log('The number of sockets here is '+data.numberOfSockets)
	  	console.log('this primes Chat id is '+data.primeChatId)
	    console.log('SocketId save in localStorage as socektId '+data.socketId);
	    localStorage.setItem('socketId', data.socketId)
	    $('#socketId').html(data.socketId)
	    id = data.socketId
	    socket.emit('getChatLog', data.primeChatId)
	  });

	  socket.on('some event', function(d){
	  	console.log('some event '+d)
	  	if ($('#list').html().length === 3) {
	  		console.log('IM NEW HERE AND I GET THE DATA')
	  	$('#list').append(d)
	  	}else{
	  		console.log('you already have the chat data')
	  	}
	  })

	  socket.on('lookingForPrime', function(d){
	  	console.log('server is looing for prime data log')
	  	console.log('is my socketId = ? '+d)
	  	
	  	console.log('my socket id is '+id)
	  	console.log(id === d)
	  	if (id === d) {
	  		var chatLog = $('#list').html()
	  		console.log('here is the chat log '+chatLog)
	  		console.log('this is the chalog length '+chatLog.length)
	  		socket.emit('primeChatLog', chatLog)
	  	}else{
	  		console.log('send me data please im new '+socket.id)
	  		socket.emit('sendMeDataLogPlease', socket.id)
	  	}
	  })

	  socket.on('newPrime', function(d){
	  	console.log('got a new prime? '+d)

	  })
	  socket.on('disconnect', function(){
	  	localStorage.removeItem('socketId')
	  })

	  socket.on('yourThePrimeChatLog', function(){
	  	console.log('yourThePrimeChatLog')
	  	socket.emit('here is the prime data', $('#list').html())
	  })

	  socket.on('sendChatLogToNewGuy', function(d){
	  	console.log('I got the D!!+ '+d)
	  	$('#list').append(d)
	  })
socket.on('CofferChat', function(d){
	console.log(d)
})