$(document).ready(theMain);

function theMain(){
	
	//create container
	$('body').append('<div class="container"></div>');
	$('.container').append('<button>Reset</button>', '<div class="theGrid"></div>');
	var $theGrid = $('.theGrid');
	var totalWidth = 960;
	var totalHeight = 960;
	$theGrid.width(totalWidth);
	$theGrid.height(totalHeight);


	createSquares;

	//change grid size when button pressed

	$("button").on("click",createSquares);

	$theGrid.on('mouseenter', '.square', function(){
		$(this).css({
	 		'background-color':'#000000'
		});
	});
	//change color when hovered
	// $(".square").ready(function(){
	// 	console.log('testing');
	// });

	// $(".square").hover(function(){
	//  	// console.log('testing');
	//  	$(this).addClass('fillThis');
	 
	//  });

	// $(".fillThis").css({
	//  		'background-color':'#000000'
	// });

	function createSquares(){

		var sizeOfGrid = prompt("Enter a number for NxN grid");		
		var widthOfSquare = totalWidth/sizeOfGrid;
		var heightOfSquare = totalHeight/sizeOfGrid;

		$theGrid.empty();
		//generate 16x16 divs
		for(i = 0; i < sizeOfGrid*sizeOfGrid; i++){
			$theGrid.append('<div class="square"></div>');
		};
		//set css styling
		$theGrid.css({

			'margin':'auto'
		});
		$theGrid.find('.square').css({
			'float':'left',
			'width': widthOfSquare,
			'height': heightOfSquare,
			'background-color':'#999999',
			'outline':'1px solid white'
		});
	};

	// function changeColor(){
	// 	$(this).css({
	// 		'background-color':'#000000'
	// 	});
	// };


}
