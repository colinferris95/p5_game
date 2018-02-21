//globals
var block_x_position = 320;
var block_y_position = 0;
var score = 0;

function setup() {
	createCanvas(640, 480);
	
}
//add to score every second
window.setInterval(
     function () {
         score = score + 1;
     }, 1000);
	 
function print_score(){
	//add score
	textSize(32);
	text(score, 10, 30);
}	

function ball_object(){
	//make the ball move downward
	block_y_position = block_y_position + 5;
	if (block_y_position > 500){
		//reset ball
		block_y_position = 0;
		
	}
	fill(50,205,50);
	//draw ball
	ellipse(block_x_position, block_y_position, 80, 80);
}

function hit_detection(){
	//hit detection
	if (mouseX < block_x_position && mouseX > block_x_position - 80 && 350 < block_y_position && 350 > block_y_position - 80){
		fill(128,128,0);
		
	}
	
}

function player(){
	//draw player rectangle
	rect(mouseX, 350, 80, 80);	
	
}

function draw() {
	//clear screen
	background(51);
	//add score
	
	print_score();
	ball_object();
	hit_detection();
	player();
	
}