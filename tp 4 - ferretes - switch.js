

function CalcularPrecio () //switch
{
    
    let preciounidad = 35;
    let cantidad;
    let marca;
    let preciofinal;
    let ingresosbrutos;
    let descuento;
    
    // no se como definir la varible descuento (preciofinal * X), porque X cambia en cada caso

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    preciofinal = preciounidad * cantidad;
    ingresosbrutos = preciofinal * 0.1; 

    //A-B-C-D
    switch (cantidad)
    {   
        case 0:
        case 1:
        case 2:
            break;
        case 3:
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
            break;
        case 4:
            if (marca = "ArgentinaLuz" || "FelipeLamparas")
            {
                document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.25);
            }
            else 
            {
                document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.2);
            }
            break;

        case 5:
            if (marca = "ArgentinaLuz")
            {
                document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.4);
            }
            else 
            {
                document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.3); 
            }
            break;
        
        default:
        
            document.getElementById("txtIdprecioDescuento").value = preciofinal - (preciofinal * 0.5);
            
            //E
            if (preciofinal - (preciofinal * 0.5) >= 120) // 0.5 es el valor del descuento para cantidades, que una vez aplicado su descuento, suman por lo menos $120.
            {
                    document.getElementById("txtIdprecioDescuento").value = preciofinal *0.5 + ingresosbrutos;
                    alert ("Usted pago $" + (preciofinal * 0.5 + ingresosbrutos) + " de IIBB, " + "siendo $" + ingresosbrutos + " el impuesto que se pago");
            }

            break;
        
    }
    
    
    

}


/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
