$(document).ready(theMain);

function theMain(){
	
	//create container
	$('body').append('<div class="container"></div>');
	$('.container').append('<button>New Grid!</button>', '<div class="theGrid"></div>');
	var $theGrid = $('.theGrid');
	var totalWidth = 960;
	var totalHeight = 700;
	$theGrid.width(totalWidth);
	$theGrid.height(totalHeight);

	createSquares;

	//change grid size when button pressed
	$("button").on("click",createSquares);

	var lessColor = 75;

	//make darker when mouse hovers over square
	$theGrid.on('mouseenter', '.square', function(){
		var rgb = $(this).css('background-color').match(/\d+/g);		

		// get new color values
		var rNew = changeColor(rgb[0]);
		var gNew = changeColor(rgb[1]);
		var bNew = changeColor(rgb[2]);

		theColor = '#' + rNew + gNew + bNew;
		$(this).css({
	 		'background-color':theColor
		});
	});

	// set rgb component value (0-255) to 
	function changeColor(rgbComponent){
		// change string value to int, then operate
		var newInteger = parseInt(rgbComponent,10) - lessColor;
		//set number to 0 if negative, change to hex string with two digits (e.g. 0C)
		hexComponent = ('0' + Math.max(0, newInteger).toString(16)).slice(-2);
		return hexComponent;
	}

	//create grid with squares
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
			'background-color':'#ffffff',
			'outline':'1px solid black'
		});
	}

}
