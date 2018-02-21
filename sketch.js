//dodger game idea from http://inventwithpython.com/blog/2012/02/20/i-need-practice-programming-49-ideas-for-game-clones-to-code/

//globals
var block_x_position = 320;
var block_y_position = 0;
var score = 0;
var game_loop = true;
var input, button, greeting;
function setup() {
	createCanvas(640, 480);
	
	

  button = createButton('reset');
  button.position(20, 65);
  button.mousePressed(reset);

 
}

function reset() {
	
	game_loop = true;
	score = 0;
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
	block_y_position = block_y_position + 8;
	if (block_y_position > 500){
		//reset ball
		block_y_position = 0;
		block_x_position = Math.floor(Math.random() * 640);
		
	}
	fill(50,205,50);
	//draw ball
	ellipse(block_x_position, block_y_position, 80, 80);
}

function hit_detection(){
	//hit detection
	if (mouseX < block_x_position && mouseX > block_x_position - 100 && 350 < block_y_position && 350 > block_y_position - 100){
		fill(128,128,0);
		game_loop = false;
		//end game
	}
	
}

function player(){
	//draw player rectangle
	rect(mouseX, 350, 80, 80);	
	
}

function draw() {
	//start game loop
	if (game_loop){
		//game processes 
		background(51);
		print_score();
		ball_object();
		hit_detection();
		player();
		
	}
	else{
		//fail screen
		background(255);
	
	}
	
}