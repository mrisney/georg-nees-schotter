let columns = 12; // number of columns of squares
let rows = 22; // number of rows of squares
let sqrsize = 15; // size of each square
let rndStep = 0.22; // Rotation Increment in degrees
let randsum = 0; // Cumulative rotation value
let padding = 2 * sqrsize; // margin area
let randval; // random value for translation and rotation
let dampen = 0.1; // soften random effect for position

function setup() {
  createCanvas(240, 400);
  colorMode(HSB);
  stroke(0); // set pen color to black
  smooth(); // use line smoothing
  noFill(); // do not fill the squares with color
  rectMode(CENTER); // use x,y value as the center of the square
  noLoop(); // execute draw() just one time
}

function draw() {
  background(255);
  for (y = 1; y <= rows; y++) {
    randsum += y * rndStep; // Add to the random value
    for (x = 1; x <= columns; x++) {
      push();
      randval = random(-randsum, randsum);
      translate(
        padding + x * sqrsize - 0.1 * sqrsize + randval * dampen,
        padding + y * sqrsize - 0.1 * sqrsize + randval * dampen
      );
      rotate(radians(randval));
      // can be monotone or color
      //fill(255*(.5+.5*cos(y)),225,225,70);
      rect(0, 0, sqrsize, sqrsize);
      pop();
    } // end of x loop
  } // end of y loop
}