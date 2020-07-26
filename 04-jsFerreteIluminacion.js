/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let preciounidad = 35;
    let cantidad;
    let marca;
    let preciofinal;
    let ingresosbrutos;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    preciofinal = preciounidad * cantidad;
    ingresosbrutos = preciofinal * 0.1;

    //A
    if (cantidad >= 6)
    {
        // quisiera definir el valor de la variable "descuento" en cada una de las condiciones pero no se puede? 
        document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.5);
        if (preciofinal - (preciofinal * 0.5) >= 120)
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal *0.5 + ingresosbrutos;
            alert ("Usted pago $" + (preciofinal * 0.5 + ingresosbrutos) + " de IIBB, " + "siendo $" + ingresosbrutos + " el impuesto que se pago");
        }
    }
   
    //B
    if (cantidad == 5)
    {
        if (marca = "ArgentinaLuz")
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.4);
        }
        else 
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.3);
        }
        // no hace falta considerar el impuesto porque, aplicado el descuento, no supera los $120
    }
   
    //C
    if (cantidad == 4)
    {
        if (marca = "ArgentinaLuz" || "FelipeLamparas")
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.25);
        }
        else 
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.20);
        }
         // no hace falta considerar el impuesto porque, aplicado el descuento, no supera los $120
    }

    //D
    if (cantidad == 3)
    {   
        if (marca = "ArgentinaLuz")
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.15);
        }
        else if (marca = "FelipeLamparas")
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.1);
        }
        else 
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.05);
        }
         // no hace falta considerar el impuesto porque, aplicado el descuento, no supera los $120
    }


    
    
    
    
    
    
    
    
    
    /* preciofinal = preciounidad * cantidad;
    ingresosbrutos = preciofinal*0.1;

    if (cantidad >= 6)
    {    
        descuento = 0.5;
        document.getElementById("txtIdprecioDescuento").value = preciofinal * descuento;
        
        if (preciofinal >= 120)
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal + ingresosbrutos;
            alert ("Usted pago $ " + preciofinal * descuento + ingresosbrutos + ", siendo $ " + ingresosbrutos + " el impuesto que pago");
        }
    }
    

   if (cantidad == 5)
    {   
        if (marca == "ArgentinaLuz")
        {   
            descuento = 0.4
            document.getElementById("txtIdprecioDescuento").value = preciofinal;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value = precio*cantidad*0.3;
        }
    }


    if (cantidad == 4)
    {
        if (marca == "ArgentinaLuz" || "FelipeLamparas")
        {
          document.getElementById("txtIdprecioDescuento").value = precio*cantidad*0.25; 
        }
        else 
        {
            document.getElementById("txtIdprecioDescuento").value = precio*cantidad*0.2;
        }
    }

    if (cantidad == 3)
    {
        if (marca == "ArgentinaLuz")
        { 
            document.getElementById("txtIdprecioDescuento").value = precio*cantidad*0.15;
        }
        else if (marca == "FelipeLamparas")
        {
            document.getElementById("txtIdprecioDescuento").value = precio*cantidad*0.1;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value = precio*cantidad*0.05;
        }
    }

    



*/
 	
}
