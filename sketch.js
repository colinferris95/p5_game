function setup() {
	createCanvas(640, 480);
	
}

function draw() {
	background(51);
  if (mouseIsPressed) {
    fill(0,100,0);
  } else {
    fill(50,205,50);
  }
  rect(mouseX, 350, 80, 80);
}