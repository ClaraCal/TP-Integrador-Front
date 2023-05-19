const divcaja = document.getElementById("caja");
const divcaja2 = document.getElementById("caja2");
const divcaja3 = document.getElementById("caja3");
const divcaja4 = document.getElementById("caja4");
const divcaja5 = document.getElementById("caja5");
const divcaja6 = document.getElementById("caja6");
const divcompraTickets = document.getElementById("compraTickets");

const buttonbotonCompra = document.getElementById("botonCompra");
const buttonbotonCompra2 = document.getElementById("botonCompra2");

buttonbotonCompra.onclick=function () {
    divcaja.style.display= "none";
    divcaja2.style.display= "none";
    divcaja3.style.display= "none";
    divcaja4.style.display= "none";
    divcaja5.style.display= "none";
    divcaja6.style.display= "none";
    divcompraTickets.style.display="inline-block";
}

buttonbotonCompra2.onclick=function () {
    divcaja.style.display= "none";
    divcaja2.style.display= "none";
    divcaja3.style.display= "none";
    divcaja4.style.display= "none";
    divcaja5.style.display= "none";
    divcaja6.style.display= "none";
    divcompraTickets.style.display="inline-block";
}

const inputcantidad = document.getElementById("cantidad");
const selectcategoria = document.getElementById("categoria");
const spanmontoapagar = document.getElementById("montoapagar");

function descuento(cat){
    let dto;
    if (cat=="estudiante") {dto=0.2;
    } else if (cat == "trainee") {dto=0.5;
    } else {dto=0.85;
    } 
    return dto;
}

let cuenta = inputcantidad.value * descuento(selectcategoria.value)*200;


inputcantidad.onchange = function () {
    spanmontoapagar.innerHTML= cuenta;
}

selectcategoria.onchange = function () {
    spanmontoapagar.innerHTML= cuenta;
}