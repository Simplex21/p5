var distance = 20;
var angle = 0.0;
var inc;

function setup() {
	createCanvas(600, 600);
	inc = TWO_PI/25.0;

	coordinateSystem();
}

function coordinateSystem() {
	line(0, height/2, width, height/2);
	line(width/2, height, width/2, 0);
	
	// save the sin instances
	for (var i = 0; i < width; i+=distance) {
	  fill(0);
	  var multiplicator = 20.0;
	  ellipse(i, height/2+(sin(angle)*multiplicator), 5, 5);
	  
	  line(i, height/2+(sin(angle)*multiplicator), i + distance, height/2+(sin(angle + inc)*multiplicator));
	  angle = angle + inc;
	}
	
	// x-Achse beschriften
	for (var i = 0; i < width; i+=distance) {
	  line(i, height/2 + 5, i, height/2 - 5);
	}
	// y-Achse beschriften
	for (var i = height; i > 0; i-=distance) {
	  line(height/2 + 5, i, width/2 - 5, i);
	}
  }