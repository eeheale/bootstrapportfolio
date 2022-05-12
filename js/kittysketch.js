//Elizabeth Healey
//Smad 308 Sec TuThur 11:10am-12:25pm
//James Madison University
//Sketch 3 - Portrait
//Hello Kitty variation

function setup() {
	var canvas= createCanvas(900, 700);
	canvas.parent('kittysketch')
	background('lightblue');
}

function draw() {
	//fill background
	fill('lightblue');
	rect(0, 0, 900, 700);

	//shirt
	fill('hotpink');
	quad(375, 450, 525, 450, 600, 700, 300, 700);
	
	//right arm
	fill('pink');
	ellipse(540, 550, 70, 150);
	ellipse(525, 600, 45, 30);
	
	//head
	fill('white');
	strokeWeight('1');
	ellipse(450, 351, 400, 290);
	
  //left arm
	fill('pink');
	ellipse(350, 500, 70, 150);
	ellipse(365, 455, 45, 30);

	//right ear
	fill('white');
	stroke(0);
	curve(300, 970, 290, 264, 380, 216, 470, 670);

	//left ear
	fill('white');
	stroke(0);
	curve(490, 910, 510, 210, 610, 266, 690, 930);

	//right eye
	fill('black');
	noStroke();
	ellipse(353, 370, 25, 40);

	fill('hotpink');
	triangle(350, 364, 355, 370, 360, 364);
	triangle(350, 364, 355, 358, 360, 364);

	//left eye
	fill('black');
	noStroke();
	ellipse(546, 370, 25, 40);

	fill('hotpink');
	triangle(540, 364, 545, 370, 550, 364);
	triangle(540, 364, 545, 358, 550, 364);

	//nose
	fill('yellow');
	ellipse(452, 400, 30, 20);

	//cheeks
	fill('pink');
	ellipse(353, 405, 20, 20);
	ellipse(548, 405, 20, 20);

	//left face fur
	fill('white');
	noStroke();
	beginShape();
	vertex(229, 300);
	vertex(279, 350);
	vertex(229, 350);
	vertex(279, 300);
	vertex(229, 300);
	vertex(279, 350);
	endShape();

	//right face fur
	fill('white');
	noStroke();
	beginShape();
	vertex(622, 300);
	vertex(672, 350);
	vertex(622, 350);
	vertex(672, 300);
	vertex(622, 300);
	vertex(672, 350);
	endShape();

	//flower
	fill('red');
	ellipse(514, 190, 30, 45);
	ellipse(500, 205, 45, 30);
	ellipse(514, 220, 30, 45);
	ellipse(525, 205, 45, 30);
	fill('black');
	ellipse(514, 210, 10, 10);

	//whiskers
	fill('black');
	ellipse(270, 385, 70, 5);
	ellipse(265, 400, 70, 5);
	ellipse(270, 415, 70, 5);

	ellipse(650, 385, 70, 5);
	ellipse(645, 400, 70, 5);
	ellipse(650, 415, 70, 5);


	//mouth 
	strokeWeight(1);
	fill('pink');
	ellipse(452, 450, 20, 20);
	fill('white');
	rect(442, 430, 20, 20);
	
}