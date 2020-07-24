/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gf;
    let gc;

    gf=parseFloat(document.getElementById("txtIdTemperatura").value);
    
    gc= (gf - 32)/1.8;

    alert ("La temperatura en grados centigrados es: " + gc.toFixed(2));
    alert ("0 grados centigrados equivalen a 32 grados Fahrenheit.");
    


}

function CentigradosFahrenheit () 
{
	let gc;
    let gf;

    gc=parseFloat(document.getElementById("txtIdTemperatura").value);
    
    gf= (gc*1.8)+32;

    alert ("La temperatura en grados Fahrenheit es: " + gf.toFixed(2));
}
