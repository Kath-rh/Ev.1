var mic;
function setup() {
 createCanvas(windowWidth, windowHeight);
 frameRate(5);
 noStroke();
 colorMode(HSB, 360, 150, 40);
 mic = new p5.AudioIn()
 mic.start();
}

function draw() {
 micLevel = mic.getLevel();
  var co = micLevel*2000

   var a = constrain(micLevel*5000, 0, 360);
   var b = constrain(micLevel*3000, 32,255)
   var c = constrain(micLevel*1000, 12, 180)
   square(random(micLevel*5000,0,width), random(1,height), random(0,co));
   fill(a, b, c);

}
