function setup() {
  noCanvas();
}
function saluda() {
    var nombre = document.getElementById("nombre").value;
  document.getElementsByTagName("h1")[0].innerText="La vida es para ser feliz, " + nombre + " los astros te dicen";
    var edad = document.getElementById("edad").value;
    var signo = document.getElementById("signo").value;

    var tamano = 30
    if (edad < 20 || edad > 60){
      depende = "oye"
    }else{
      depende = "baia baia"
    }
    document.getElementsByTagName("h2")[0].innerText = depende;
    var signo = document.getElementById("signo").value;
    document.getElementsByTagName("h3")[0].innerText = signo + " más";

}
