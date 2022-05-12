//Elizabeth Healey
//Smad 308 Sec TuThur 11:10am-12:25PM
//James Madison University
//Sketch 2- Animation

//Global variables
var x = 450;
var y = 250;
//Easing rate
var easing = .03;


function setup() {
	var canvas= createCanvas(400, 400);
    canvas.parent('bunnysketch');
	background('#196F3D');
}

function draw() {
	//Fill background
	fill('#196F3D');
	noStroke();
	rect(0, 0, 800, 800);
	
	//Setup for animation to ease with mouse movement according to x axis
	var targetX = mouseX;
	x += (targetX -x) * easing;
	
	//Setup for animation to ease with mouse movement according to y axis 
	var targetY = mouseY;
	y += (targetY -y) * easing;
	
	
	//Carrot 1, top left
	fill('orange');
	triangle(5, 50, 45, 50, 25, 150);
	fill('darkgreen');
	ellipse(15, 30, 15, 40);
	ellipse(25, 30, 15, 40);
	ellipse(35, 30, 15, 40);
	
	//Carrot 2, bottom left
	fill('orange');
	triangle(5, 290, 45, 290, 25, 390);
	fill('darkgreen');
	ellipse(15, 270, 15, 40);
	ellipse(25, 270, 15, 40);
	ellipse(35, 270, 15, 40);
	
	//Carrot 3, top right
	fill('orange');
	triangle(395, 50, 355, 50, 375, 150);
	fill('darkgreen');
	ellipse(385, 30, 15, 40);
	ellipse(375, 30, 15, 40);
	ellipse(365, 30, 15, 40);
	
	//Carrot 4, bottom right
	fill('orange');
	triangle(395, 290, 355, 290, 375, 390);
	fill('darkgreen');
	ellipse(385, 270, 15, 40);
	ellipse(375, 270, 15, 40);
	ellipse(365, 270, 15, 40);
	
	//Flowers
	fill('yellow');
	ellipse(30, 170, 10, 10);
	ellipse(35, 175, 10, 10);
	ellipse(30, 180, 10, 10);
	ellipse(25, 175, 10, 10);
	fill('black');
	ellipse(30,175, 3, 3);
	
	fill('yellow');
	ellipse(53, 123, 10, 10);
	ellipse(58, 128, 10, 10);
	ellipse(53, 133, 10, 10);
	ellipse(48, 128, 10, 10);
	fill('black');
	ellipse(53, 128, 3, 3);
	
	fill('yellow');
	ellipse(56, 156, 10, 10);
	ellipse(61, 161, 10, 10);
	ellipse(56, 166, 10, 10);
	ellipse(51, 161, 10, 10);
	fill('black');
	ellipse(56, 161, 3, 3);
	
	fill('#922B21');
	ellipse(350, 150, 10, 10);
	ellipse(355, 155, 10, 10);
	ellipse(350, 160, 10, 10);
	ellipse(345, 155, 10, 10);
	fill('black');
	ellipse(350, 155, 3, 3);
	
	fill('#922B21');
	ellipse(389, 130, 10, 10);
	ellipse(394, 135, 10, 10);
	ellipse(389, 140, 10, 10);
	ellipse(384, 135, 10, 10);
	fill('black');
	ellipse(389, 135, 3, 3);
	
	fill('#922B21');
	ellipse(380, 170, 10, 10);
	ellipse(385, 175, 10, 10);
	ellipse(380, 180, 10, 10);
	ellipse(375, 175, 10, 10);
	fill('black');
	ellipse(380, 175, 3, 3);
	
	fill('#AF7AC5');
	ellipse(50, 350, 10, 10);
	ellipse(55, 355, 10, 10);
	ellipse(50, 360, 10, 10);
	ellipse(45, 355, 10, 10);
	fill('black');
	ellipse(50, 355, 3, 3);

	fill('#AF7AC5');
	ellipse(40, 382, 10, 10);
	ellipse(45, 387, 10, 10);
	ellipse(40, 392, 10, 10);
	ellipse(35, 387, 10, 10);
	fill('black');
	ellipse(40, 387, 3, 3);
	
	fill('#AF7AC5');
	ellipse(80, 370, 10, 10);
	ellipse(85, 375, 10, 10);
	ellipse(80, 380, 10, 10);
	ellipse(75, 375, 10, 10);
	fill('black');
	ellipse(80, 375, 3, 3);
	
	fill('#2874A6');
	ellipse(388, 380, 10, 10);
	ellipse(393, 385, 10, 10);
	ellipse(388, 390, 10, 10);
	ellipse(383, 385, 10, 10);
	fill('black');
	ellipse(388, 385, 3, 3);
	
	fill('#2874A6');
	ellipse(348, 325, 10, 10);
	ellipse(353, 330, 10, 10);
	ellipse(348, 335, 10, 10);
	ellipse(343, 330, 10, 10);
	fill('black');
	ellipse(348, 330, 3, 3);
	
	fill('#2874A6');
	ellipse(342, 366, 10, 10);
	ellipse(347, 371, 10, 10);
	ellipse(342, 376, 10, 10);
	ellipse(337, 371, 10, 10);
	fill('black');
	ellipse(342, 371, 3, 3);
	
	//Body
	fill('pink');
	ellipse(x+50, y+20, 65, 100);
	
	//Right foot
	fill('deeppink');
	ellipse(x+65, y+70, 25, 19);
	
	//Left foot
	fill('palevioletred');
	ellipse(x+35, y+70, 25, 19);
	
	//Right arm
	fill('deeppink');
	ellipse(x+40, y+20, 18, 33);
	
	//Left arm
	fill('palevioletred');
	ellipse(x+60, y+20, 18, 33);
	
	//Left ear
	fill('pink');
	ellipse(x+35, y-80, 23, 65);
	
	//Left ear inner layer
	fill('white');
	ellipse(x+35, y-80, 13, 47);
	
	//Right ear
	fill('pink');
	ellipse(x+65, y-80, 23, 65);
	
	//Right ear inner layer
	fill('white');
	ellipse(x+65, y-80, 13, 47);
	
	//Head
	fill('pink');
	ellipse(x+50, y-40, 60, 60);
	
	//Left eye
	fill('white');
	ellipse(x+40, y-50, 15, 20);
	
	//Right eye
	fill('white');
	ellipse(x+60, y-50, 15, 20);
	
	//Left iris
	//'#E899FF'
	fill('#CC9900');
	ellipse(x+60, y-50, 10, 15);
	
	//Right iris
	fill('#E8998F');
	ellipse(x+40, y-50, 10, 15);
	
	//Left pupil
	fill('black');
	ellipse(x+60, y-50, 5, 10);
	
	//Right pupil 
	fill('black');
	ellipse(x+40, y-50, 5, 10);
	
	//Left eye spec
	fill('white');
	ellipse(x+60, y-53, 2, 2);
	
	//Right eye spec
	fill('white');
	ellipse(x+40, y-53, 2, 2);
	
	//Nose
	fill('lavender');
	ellipse(x+50, y-40, 7, 7);
	
	//Mouth
	fill('white');
	arc(x+50, y-30, 10, 15, 50, 60);
	
	//When mouse is dragged to a carrot, the bunny's heart appears
	if (mouseX < 46 && mouseY <151 ) {
		fill('red');
		ellipse(x+46, y-5, 10, 10);
		ellipse(x+54, y-5, 10, 10);
		triangle(x+41, y-3.6, x+59, y-3.6, x+50, y+8);
	} else if (mouseX > 300  && mouseY < 151 ) {
		fill('red');
		ellipse(x+46, y-5, 10, 10);
		ellipse(x+54, y-5, 10, 10);
		triangle(x+41, y-3.6, x+59, y-3.6, x+50, y+8);
	} else if (mouseX < 46 && mouseY > 151 ) {
		fill('red');
		ellipse(x+46, y-5, 10, 10);
		ellipse(x+54, y-5, 10, 10);
		triangle(x+41, y-3.6, x+59, y-3.6, x+50, y+8);
	} else if (mouseX > 300 && mouseY > 300 ) {
		fill('red');
		ellipse(x+46, y-5, 10, 10);
		ellipse(x+54, y-5, 10, 10);
		triangle(x+41, y-3.6, x+59, y-3.6, x+50, y+8);
	} 
		//When mouse is clicked, a speech bubble appears over the bunny
		else if (mouseIsPressed) {
		fill('white');
		ellipse(x+70, y-150, 45, 45);
		ellipse(x+90, y-153, 60, 50);
		ellipse(x+112, y-150, 50, 50);
		ellipse(x+90, y-135, 60, 45);
		ellipse(x+65, y-138, 40, 40);
		ellipse(x+112, y-135, 50, 45);
		ellipse(x+100, y-97, 15, 15);
		ellipse(x+95, y-80, 10, 10);
		
		fill('black');
		textFont('Georgia');
		textSize(13);
		text("I'm hungry!", x+58, y-140);
	}
		
}