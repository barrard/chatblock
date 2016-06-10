

// initialize Packery

// initialize Packery
var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  // columnWidth helps with drop positioning
  columnWidth: 100
});

// make all grid-items draggable
$grid.find('.grid-item').each( function( i, gridItem ) {
   draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});

 draggie = $('.grid-item').draggabilly({
  containment: '.grid',
  // axis: 'x',
  // containment: '.container',
  grid: [ 1, 1 ]


})

// jQuery
function listener(e) {
  var id = localStorage.socketId
  // get Draggabilly instance
  var draggie = $(this).data('draggabilly');
  console.log(e.target)
  //$(e.target).attr('class')
  
  console.log(e.type+' eventName happened', draggie.position.x, draggie.position.y );
  socket.emit(e.type, {
    eventType:e.type,
    eventTarget:$(this),
    eventInitiator:id,
    eventPositionX:draggie.position.x,
    eventPositionY:draggie.position.y

  })
}
// bind event listener
draggie.on( 'dragStart', listener );
draggie.on( 'dragMove', listener );
// draggie.on( 'dragEnd', listener );
// draggie.on( 'pointerDown', listener );
// // draggie.once( 'pointerMove', listener );
// draggie.on( 'pointerUp', listener );
// draggie.on( 'staticClick', listener );

socket.on('SomepointerDown', function(d){
  console.log('server is telling me someone clicked a dragable element '+d.eventTarget)
  console.log(d.eventTarget[0])
  // var blockItem = d.eventTarget[0]
  // for(var k in blockItem){ 
  //   var myBlock = (blockItem[k] - 10)
  //   var box = $('.grid').packery('getItemElements')[myBlock]
  //   $(box).css('top' ,d.eventPositionY)
  //   $(box).css('left', d.eventPositionX)
  // }
  //for(var k in d){console.log(k+' : '+d[k])}
  

})



var box = $('#clickBox');
box.on('click', function(){
	var id = localStorage.socketId
	$(this).attr('id', id)
	console.log(id);
})

  box.on('scrollstop scrollstart swipeleft tap swiperight taphold vclick vmousedown ', function(event){
     event.preventDefault()
      var box = event.target
      console.log(event)
     $(box).html('<h1>'+event.type+'</h1>'); 
});

var chat = $('#chat')
var send = $('#send')

chat.on('keyup', function(e) {
	if(e.keyCode === 13){sendChat()}
})

function sendChat(){
	var text = $(chat).val()
	if (text != '') {
	socket.emit('send', text)
	$(chat).val('')
	}else{
		$(chat).attr('placeholder', 'Type Text Here!!')
	}
}

send.on('click', sendChat)




	socket.on('update', function(d){
		console.log(d)
		$('#list').append('<li><h3><a href='+d+'>'+d+'</a></h3></li>')
	})




