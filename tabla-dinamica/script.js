function mostrar_tabla() {

    var tabla = document.getElementById("tabla");

    var contenido = "";

    //Cabecera de la tabla

    contenido += "<table id='tabla_dinamica' class='table table-bordered border-primary'>";

    contenido += "<tr>";
    contenido += "<th class='table-primary'>Cantidad</th>";
    contenido += "<th class='table-primary'>Frutas</th>";
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<th>3</th>";
    contenido += "<th>Papayas</th>";
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<th>1</th>";
    contenido += "<th>Mango</th>";
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<th>7</th>";
    contenido += "<th>Bananos</th>";
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<th>10</th>";
    contenido += "<th>Fresas</th>";
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<th>5</th>";
    contenido += "<th>Cas</th>";
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<th>2</th>";
    contenido += "<th>Aguacates</th>";
    contenido += "</tr>";

    contenido += "</table>";

    contenido += "<input type='button' class='btn btn-primary' onclick='siguiente_pagina()' value='Ver mas articulos!'>"

    tabla.innerHTML = contenido;

}

function ocultar_tabla() {
    var tabla = document.getElementById("tabla");
    var boton_nuevo = document.getElementById("boton_nuevo");

    var contenido = "";

    tabla.innerHTML = contenido;
    boton_nuevo.innerHTML = contenido;
}

function siguiente_pagina() {
    var contenedor = document.getElementById("boton_nuevo");

    var buton = "";

    buton += "<input type='button' class='btn btn-primary' value='Siguiente página?'>";

    contenedor.innerHTML = buton;
}