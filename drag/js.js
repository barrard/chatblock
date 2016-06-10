// var drag = $('.drag')
// drag.on('click', function(e){
// 	console.log(e)
// })
// var $draggable = $('.drag').draggabilly({
//   // options...
// })
// initialize Packery
var $grid = $('.grid').packery({
  itemSelector: '.drag',
  // gutter: 10,
  // columnWidth helps with drop positioning
  columnWidth: 5
});



// // jQuery
// $grid.packery( 'bindDraggabillyEvents', $draggable )


// // make all '.drag' draggable
$grid.find('.drag').each( function( i, gridItem ) {
   draggie = new Draggabilly( gridItem,{
  	// containment: '.grid',
  	// axis: 'x',
  	// grid: [ 20, 20 ]
  	  } );




//   // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});




$grid.on( 'dragItemPositioned',
  function( event, draggedItem ) {
    console.log( 'Packery drag item positioned',
      draggedItem.element );
  }
);

$grid.on( 'fitComplete',
  function( event, item ) {
    console.log( 'Packery fit', item.element );
  }
);



// jQuery
function listener(e) {
  // get Draggabilly instance
  var draggie = $(this).data('draggabilly');
  console.log(draggie)
  // console.log( 'eventName happened', draggie.position.x, draggie.position.y );
}

draggie.on('dragStart', listener)

// $grid.on( 'dragStart',
//   function( event, pointer ) {
//   	console.log('types of Events')
//   	for(var x in event){console.log(x+" : "+event[x])}
//   		console.log('types of pointer')
//   	for(var x in pointer)console.log(x+" : "+pointer[x])
//     console.log( 'DragBilly drag item '+
//       event+" "+pointer );
//   }
// );

draggie.on( 'dragMove', function( event, pointer, moveVector ) {
console.log('dragMove')
})
