//dodger game idea from http://inventwithpython.com/blog/2012/02/20/i-need-practice-programming-49-ideas-for-game-clones-to-code/

//globals
var block_x_position = 320;
var block_y_position = 0;
var score = 0;
var game_loop = true;
var button;
var blocks = [];

function setup() {
	
	createCanvas(640, 480);
	
	button = createButton('reset');
	button.position(20, 65);
	button.mousePressed(reset);
	
	//block = new ball_object();
	
	for (var i=0; i<5; i++) {
		blocks.push(new ball_object());
	}
}

function draw() {
	
	//start game loop
	if (game_loop){
		
		//game processes 
		background(51);
		print_score();
		
		
		for (var i=0; i<blocks.length; i++) {
			blocks[i].move();
			blocks[i].display();
			blocks[i].hitdetection();
		}
		
		player();
		
	}
	else{
		
		//fail screen
		background(255);
	
	}
	
}

function reset() {
	
	game_loop = true;
	score = 0;
	//blocks = [];
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
//ball class
function ball_object(){
	this.x = Math.floor(Math.random() * 640);
	this.y = Math.floor(Math.random() * 480) + 300
	this.width = 40;
	this.accel = 8;
	
	this.move = function(){
		this.y += this.accel;
		
		if (this.y > 500){
		
			//reset ball
			this.y = 0;
			this.x = Math.floor(Math.random() * 640);
		
		}
	
	}
	
	this.display = function(){
		fill(50,205,50);
		//draw ball
		ellipse(this.x, this.y, this.width, this.width);
	}
	
	this.hitdetection = function(){
		
		if (mouseX + 10 < this.x && mouseX + 10 > this.x - 60 && 380 < this.y && 380 > this.y - 60){
			fill(128,128,0);
			game_loop = false;
			//end game
		}
		
	}
	
	
}


function player(){
	
	//draw player rectangle
	rect(mouseX, 350, 80, 80);	
	
}




