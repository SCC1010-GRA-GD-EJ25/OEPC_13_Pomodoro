let minutos = .1 // tiempo en minutos 
let tiempo = minutos * 60 // convierte el tiempo en segundos
let sonido // variable para almacenar el sonido

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  frameRate(1) // fija el frameRate a 1 frame por segundo (muy lento) 
  textAlign(CENTER,CENTER)  // fija la alineación del texto al centro 
  textFont("Arial")  // fija la fuente del texto
}

function draw() {
  // put drawing code here
  background("Red") // fija el color de fondo 
  fill("Green") // fija el color del texto
  //rect(100,100,200,200)
  console.log(frameRate()) // imprime el frameRate en la consola del navegador (F12) 
  if(tiempo <= 0){
    noLoop() // detiene el loop de draw 
    textSize(30)  // fija el tamaño de la fuente
    text("Tiempo de descanso",width/2, height/2) // muestra un mensaje en el centro de la pantalla
  }else{
    //nf da formato a los números, el primer argumento es el número a formatear y el segundo es el número de dígitos que se mostrarán 
    let m = nf(floor(tiempo/60), 2) // obtiene los minutos restantes 
    let s = nf((tiempo % 60),2) // obtiene los segundos restantes 
    textSize(96)  // fija el tamaño de la fuente 
    text(m + ":" + s, width/2, height/2) // muestra el tiempo restante en el centro de la pantalla
    tiempo --
  }
}
