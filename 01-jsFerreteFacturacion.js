/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var p1;
    var p2;
    var p3;
    var suma;
    
    p1=document.getElementById("txtIdPrecioUno").value;
    p2=document.getElementById("txtIdPrecioDos").value;
    p3=document.getElementById("txtIdPrecioTres").value;

    suma= parseFloat(p1)+parseFloat(p2)+parseFloat(p3);
    alert (suma);


}
function Promedio () 
{
	var p1;
    var p2;
    var p3;
    var promedio;
    
    p1=document.getElementById("txtIdPrecioUno").value;
    p2=document.getElementById("txtIdPrecioDos").value;
    p3=document.getElementById("txtIdPrecioTres").value;

    promedio=(parseFloat(p1)+parseFloat(p2)+parseFloat(p3))/3;
    alert (promedio.toFixed(2));
}
function PrecioFinal () 
{

    var p1;
    var p2;
    var p3;
    var preciofinal;
    
    p1=document.getElementById("txtIdPrecioUno").value;
    p2=document.getElementById("txtIdPrecioDos").value;
    p3=document.getElementById("txtIdPrecioTres").value;

    preciofinal= parseFloat(p1)+parseFloat(p2)+parseFloat(p3)*1.21;
    alert (preciofinal.toFixed(2));

	
}