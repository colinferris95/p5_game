//globals
var block_x_position = 320;
var block_y_position = 0;

function setup() {
	createCanvas(640, 480);
	
}

function draw() {
	//clear screen
	background(51);
	//make the ball move downward
	block_y_position = block_y_position + 5;
	if (block_y_position > 500){
		//reset ball
		block_y_position = 0;
		
	}
	fill(0,100,0);
	//draw ball
	ellipse(block_x_position, block_y_position, 80, 80);
	if (mouseIsPressed) {
		fill(0,100,0);
	} else {
		fill(50,205,50);
	}
	//hit detection
	if (mouseX < block_x_position && mouseX > block_x_position - 80 && 350 < block_y_position && 350 > block_y_position - 80){
		fill(128,128,0);
		
	}
	//draw player rectangle
	rect(mouseX, 350, 80, 80);
}