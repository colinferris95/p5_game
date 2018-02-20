//globals
var block_x_position = 320;
var block_y_position = 0;

function setup() {
	createCanvas(640, 480);
	
}

function draw() {
	background(51);
	
	block_y_position = block_y_position + 5;
	fill(0,100,0);
	ellipse(block_x_position, block_y_position, 80, 80);
	if (mouseIsPressed) {
		fill(0,100,0);
	} else {
		fill(50,205,50);
	}
	rect(mouseX, 350, 80, 80);
}