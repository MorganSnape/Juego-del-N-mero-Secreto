let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
const maxNumber = 10

let numeroIntentos;
/* Se llama la etiqueta del html y le insertamos contenido a travez del document y el innerHTML.
Todo esto contenido en un bloque mediante una función
*/
function insertarTexto(elemento, texto) {
  let textoInsertar = document.querySelector(elemento);
  textoInsertar.innerHTML = texto;
}

function generarNumeroSecreto() {

  let numeroGenerado = Math.floor(Math.random() * 10) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if(listaNumerosSorteados.length == maxNumber){
    insertarTexto("p", "¡Felicidades! adivinaste todos los números posibles.")
  }

  // Revisa si elnumeros generado esta incluido en la lista y si el numero esta retornamos la funcion para que se llame asi misma asi genera otro nuevo numero
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  }else {
  //Si no esta en la lista lo incluiye 
  listaNumerosSorteados.push(numeroGenerado);
  return numeroGenerado;
}}

//creamos una funcion para cunado el usuario haga click en intentar  genere una acción
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  // console.log(numeroSecreto);
  // console.log(numeroDeUsuario === numeroSecreto);
  // console.log(intentos)

  if (numeroDeUsuario === numeroSecreto) {
    insertarTexto("p", "¡Felicidades, has acertado!");
    document.getElementById("reiniciar").removeAttribute("disabled")
  } else {
    // El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      insertarTexto("p",`¡Ups!, estas cerca, un poco menos. Llevas ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);

    } else if (numeroDeUsuario < numeroSecreto) {
      insertarTexto("p",`¡Ups!, estas cerca, un poco más. Llevas ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
    }

    intentos++
    limpiarCaja();
  }
  return;
}

function condicionesIniciales(){
  
  insertarTexto("h1", "Juego del número secreto");
  insertarTexto("p", "Indica un número del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function limpiarCaja(){
  document.querySelector("#valorUsuario").value = "";
  // let valorCaja = document.querySelector("#valorUsuario");
  // valorCaja.value = "";

}

function reiniciarJuego(){
  //Limpiar la caja
  limpiarCaja()

  //Indicar mensaje de numeros
  //Generar el número aleatorio
  //Reiniciar el número de intentos
  condicionesIniciales();

  //Deshabilitar el boton de nuevo jugo
  document.getElementById("reiniciar").setAttribute("disabled" , "true")
}

condicionesIniciales();

