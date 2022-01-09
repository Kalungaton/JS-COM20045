let brand = prompt("Ingresar marca de la VGA");
let model = prompt("Ingresa el Modelo de VGA");
let parTnumber = prompt("Ingresa manufacture part number");
let costoFob = parseInt(prompt("Ingrese el costo Fob de la VGA"));
let fn = 1.08;
const IVA105 = 1.105;
let margen = 0.85;
let costoLandedSinIva = costoFob * fn;
let costoLandedConIva = costoLandedSinIva * IVA105;
let precioVenta = costoLandedConIva / margen;

console.log(
  "El costo landeado sin iva es" + " " + "USD" + " " + costoLandedSinIva
);

console.log(
  "El costo landeado con iva es" + " " + "USD" + " " + costoLandedConIva
);

console.log("El precio sugerido de venta es" + " " + "USD" + " " + precioVenta);

alert(
  "El precio de venta sugerido de la placa" +
    " " +
    brand +
    " " +
    model +
    " " +
    "MNP#" +
    parTnumber +
    " " +
    "es de" +
    " " +
    "USD" +
    " " +
    precioVenta
);
