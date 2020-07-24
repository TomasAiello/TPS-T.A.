/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    
    var rectangulo;
  
    largo= document.getElementById("txtIdLargo").value;
    ancho= document.getElementById("txtIdAncho").value;
    
    
    rectangulo= parseFloat(largo)*parseFloat(ancho);
   
  

    alert (rectangulo*3).toFixed(2);


}
function Circulo () 
{
    var circulo;
    var radio; 
    radio= document.getElementById("txtIdRadio").value;
    circulo = parseFloat(6,28*radio); 

    alert (circulo*3).toFixed(2);
    
}
function Materiales () 
{   
    var largo;
    var ancho;
    var cemento;
    var cal;
    var contrapiso;
   

    largo= parseInt(document.getElementById("txtIdLargo").value);
    ancho= parseInt(document.getElementById("txtIdAncho").value);
    
    cal=largo*ancho*3;
    cemento=largo*ancho*2;


    alert ("Usted necesita: " + cemento  + " bolsas de cemento y " +  cal  + " de cal");


}