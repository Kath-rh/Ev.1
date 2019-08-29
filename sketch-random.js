function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noStroke();
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  for (var x = 0; x < 1; x++) {
    var a = random(0, 360);
    var b = random(400,255)
    var c = random(100, 180)
    fill(a, b, c);
    pelota(a);
  }
}

function pelota(diametro) {
  square(random(14, width), random(1, height), diametro);
}
