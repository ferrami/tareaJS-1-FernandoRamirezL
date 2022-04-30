function sumar() {

    var numero_uno = document.getElementById("numero_uno").value * 1;

    var numero_dos = document.getElementById("numero_dos").value * 1;

    var resultado = numero_uno + numero_dos;

    window.confirm(resultado);

    console.log(resultado);

};

function restar() {

    var numero_uno = document.getElementById("numero_uno").value * 1;

    var numero_dos = document.getElementById("numero_dos").value * 1;

    var resultado = numero_uno - numero_dos;

    window.confirm(resultado);

    console.log(resultado);

};

function multiplicar() {

    var numero_uno = document.getElementById("numero_uno").value * 1;

    var numero_dos = document.getElementById("numero_dos").value * 1;

    var resultado = numero_uno * numero_dos;

    window.confirm(resultado);

    console.log(resultado);

};


function limpiar() {
    document.getElementById("numero_uno").value = "";
    document.getElementById("numero_dos").value = "";
};