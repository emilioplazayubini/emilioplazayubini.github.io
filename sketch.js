//2016 08 04
//colegio oratotio don bosco 
//latinoamerica
//clase de programacion
//funciona con p5.js
//Emilio Plaza Yubini
//saludos a mi mami
//setup()coore una vez
//al principio setup()}
//crear un lienzo
//createCanvas(800, 600);

var crazy;




//pintar fondo verde
//background(red, green, blue)
//0 es nada, 255 es todo
//background(0, 255, 0)

//draw() se ejecuta despues de setup()
//se hace 60 veces por segundo
//que sigue el mouse
//ellipse(posX, posY, width, height)

//CAMBIAR PINCEL ANTES DE FIGURAS ellipse 
//definir ancho borde
//strokeWeight(10)

//definir color del borde 
//stroke(color)

//explicacion de colores
//1:grayscale, 0 en negro, 255 es blanco
//2:grayscale + alpha
//3:RGB, red, green, blue
//4:RGB + alpha
//alpha: 0 es transparente, 255 es solido
//stroke(red, green, blue, 0-255/2)

//bordes
//fill(random(255), random(255), random(255))
//fill(255*mouseY/right, 0, 0)
//variable =var

function setup() {		
	createCanvas(800, 800);
	background(0, 255, 200);   

}



function draw() {
  

  	strokeWeight(10);
	stroke(0, 255, 0,20/2);
	//fill(random(255), random(255), random(255)) 
	fill(255*mouseY/size, 0, 0)
	ellipse(mouseX, mouseY, crazy, crazy);
	crazy=10*9
}