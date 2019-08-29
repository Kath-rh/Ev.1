var mic;
function setup() {
 createCanvas(windowWidth, windowHeight);
 frameRate(5);
 noStroke();
 colorMode(HSB, 360, 100, 100);
 mic = new p5.AudioIn()
 mic.start();
}

function draw() {
 micLevel = mic.getLevel();
  var co = micLevel*800

   var a = constrain(micLevel*900, 0, 360);
   var b = constrain(micLevel*4000, 32,255)
   var c = constrain(micLevel*50000, 12, 180)
   square(random(micLevel*5000,0,width), random(0,height), random(1,co));
   fill(a, b, c);

}
