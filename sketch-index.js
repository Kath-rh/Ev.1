var r;

function setup() {
    var Canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', -1);
    r = random(0, 360);
    colorMode(HSB, 250, 60, 60);
    background(r, 100, 100);
}

function saluda() {
    var nombre = document.getElementById("nombre").value;
    document.getElementsByTagName("h1")[0].innerText = "La vida es para ser feliz, " + nombre + " los astros te dicen";
    var edad = document.getElementById("edad").value;
    var signo = document.getElementById("signo").value;

    var tamano = 30
    if (edad < 20 || edad > 60) {
        depende = "oye"
    } else {
        depende = "baia baia"
    }

    function draw() {
        inventa(random(1, 100));
    }

    function inventada(diametro) {
        colorMode(HSB, 250, 60, 60);
        stroke(r, 100, 75);
        colorMode(RGB);
        fill(100, 90)
        ellipse(mouseX, mouseY, diametro, diametro);
    }
