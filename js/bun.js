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
	var canvas= createCanvas(800, 800);
    canvas.parent('bunnysketch');
	background('lightgreen');
}

function draw() {
	//Fill background
	fill('lightgreen');
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
	triangle(60, 100, 100, 100, 80, 200);
	fill('darkgreen');
	ellipse(70, 80, 15, 40);
	ellipse(80, 80, 15, 40);
	ellipse(90, 80, 15, 40);
	
	//Carrot 2, bottom left
	fill('orange');
	triangle(60, 600, 100, 600, 80, 700);
	fill('darkgreen');
	ellipse(70, 580, 15, 40);
	ellipse(80, 580, 15, 40);
	ellipse(90, 580, 15, 40);
	
	//Carrot 3, top right
	fill('orange');
	triangle(760, 100, 720, 100, 740, 200);
	fill('darkgreen');
	ellipse(750, 80, 15, 40);
	ellipse(740, 80, 15, 40);
	ellipse(730, 80, 15, 40);
	
	//Carrot 4, bottom right
	fill('orange');
	triangle(760, 600, 720, 600, 740, 700);
	fill('darkgreen');
	ellipse(750, 580, 15, 40);
	ellipse(740, 580, 15, 40);
	ellipse(730, 580, 15, 40);
	
	//Flowers
	fill('yellow');
	ellipse(50, 200, 10, 10);
	ellipse(55, 205, 10, 10);
	ellipse(50, 210, 10, 10);
	ellipse(45, 205, 10, 10);
	fill('black');
	ellipse(50,205, 3, 3);
	
	fill('yellow');
	ellipse(113, 153, 10, 10);
	ellipse(118, 158, 10, 10);
	ellipse(113, 163, 10, 10);
	ellipse(108, 158, 10, 10);
	fill('black');
	ellipse(113, 158, 3, 3);
	
	fill('yellow');
	ellipse(96, 186, 10, 10);
	ellipse(101, 191, 10, 10);
	ellipse(96, 196, 10, 10);
	ellipse(91, 191, 10, 10);
	fill('black');
	ellipse(96, 191, 3, 3);
	
	fill('yellow');
	ellipse(730, 200, 10, 10);
	ellipse(735, 205, 10, 10);
	ellipse(730, 210, 10, 10);
	ellipse(725, 205, 10, 10);
	fill('black');
	ellipse(730, 205, 3, 3);
	
	fill('yellow');
	ellipse(770, 150, 10, 10);
	ellipse(775, 155, 10, 10);
	ellipse(770, 160, 10, 10);
	ellipse(765, 155, 10, 10);
	fill('black');
	ellipse(770, 155, 3, 3);
	
	fill('yellow');
	ellipse(780, 180, 10, 10);
	ellipse(785, 185, 10, 10);
	ellipse(780, 190, 10, 10);
	ellipse(775, 185, 10, 10);
	fill('black');
	ellipse(780, 185, 3, 3);
	
	fill('yellow');
	ellipse(50, 650, 10, 10);
	ellipse(55, 655, 10, 10);
	ellipse(50, 660, 10, 10);
	ellipse(45, 655, 10, 10);
	fill('black');
	ellipse(50, 655, 3, 3);

	fill('yellow');
	ellipse(35, 690, 10, 10);
	ellipse(40, 695, 10, 10);
	ellipse(35, 700, 10, 10);
	ellipse(30, 695, 10, 10);
	fill('black');
	ellipse(35, 695, 3, 3);
	
	fill('yellow');
	ellipse(100, 670, 10, 10);
	ellipse(105, 675, 10, 10);
	ellipse(100, 680, 10, 10);
	ellipse(95, 675, 10, 10);
	fill('black');
	ellipse(100, 675, 3, 3);
	
	fill('yellow');
	ellipse(780, 680, 10, 10);
	ellipse(785, 685, 10, 10);
	ellipse(780, 690, 10, 10);
	ellipse(775, 685, 10, 10);
	fill('black');
	ellipse(780, 685, 3, 3);
	
	fill('yellow');
	ellipse(720, 660, 10, 10);
	ellipse(725, 665, 10, 10);
	ellipse(720, 670, 10, 10);
	ellipse(715, 665, 10, 10);
	fill('black');
	ellipse(720, 665, 3, 3);
	
	fill('yellow');
	ellipse(700, 690, 10, 10);
	ellipse(705, 695, 10, 10);
	ellipse(700, 700, 10, 10);
	ellipse(695, 695, 10, 10);
	fill('black');
	ellipse(700, 695, 3, 3);
	
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
	if (mouseX < 101 && mouseY <201 ) {
		fill('red');
		ellipse(x+46, y-5, 10, 10);
		ellipse(x+54, y-5, 10, 10);
		triangle(x+41, y-3.6, x+59, y-3.6, x+50, y+8);
	} else if (mouseX > 719 && mouseY <201 ) {
		fill('red');
		ellipse(x+46, y-5, 10, 10);
		ellipse(x+54, y-5, 10, 10);
		triangle(x+41, y-3.6, x+59, y-3.6, x+50, y+8);
	} else if (mouseX < 101 && mouseY > 559 ) {
		fill('red');
		ellipse(x+46, y-5, 10, 10);
		ellipse(x+54, y-5, 10, 10);
		triangle(x+41, y-3.6, x+59, y-3.6, x+50, y+8);
	} else if (mouseX > 719 && mouseY > 559 ) {
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