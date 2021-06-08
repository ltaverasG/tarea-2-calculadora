// variables calculadora
var btnNumeros = document.getElementsByName("btnNumero");
var pantallaPrincipal = document.getElementById("pantallaPrincipal");
var operadorHistorial = document.getElementById("operadorHistorial");
var btnIgual = document.getElementById("btnIgual");

//variables label
var signoOperacion = document.getElementById("signoOperacion");
var numeroAHistorial = document.getElementById("numeroAHistorial");
var numeroBHistorial = document.getElementById("numeroBHistorial");

//variables numericas
var A = 0;
var B = 0;
var resultado = 0;

// bucle para recorrer arreglo btnNumero (leer valores)
btnNumeros.forEach(function(boton){
    boton.addEventListener("click",function(){
        pantallaPrincipal.value = pantallaPrincipal.value + boton.value;
    });
});

//funcion validaciones
function validaciones(){
    if(pantallaPrincipal.value == ""){
        pantallaPrincipal.focus();        
    } else if (numeroAHistorial.innerHTML != "" && operadorHistorial.innerHTML !="" && numeroBHistorial.innerHTML == ""){
        btnIgual.focus();

    } else {
        A = pantallaPrincipal.value;
        numeroAHistorial.innerHTML = A;
        numeroBHistorial.innerHTML = "";
        pantallaPrincipal.value = "";
    }
}

// funcion que trabaja las operaciones
function operaciones(){
    B = pantallaPrincipal.value;
    numeroBHistorial.innerHTML = B;

    switch (signoOperacion.innerHTML){
        case "+":
            resultado = parseFloat(A) + parseFloat(B);
            break;
        case "-":
            resultado = parseFloat(A) - parseFloat(B);
            break;
        case "x":
            resultado = parseFloat(A) * parseFloat(B);
            break;
        case "/":
            resultado = parseFloat(A) / parseFloat(B);
            break;
    }
    signoOperacion.innerHTML = "=";
    pantallaPrincipal.value = resultado;
}

//funcion para mandar resultado (=)
function resultadoF(){
    if(pantallaPrincipal.value !="" && signoOperacion.innerHTML != "" && signoOperacion.innerHTML != "="){
        operaciones();

    }else{
        pantallaPrincipal.focus();
    }
}    

//funcion para limpiar (C) "clear"
function limpiar(){
     A = 0;
     B = 0;
     resultado = 0;
     pantallaPrincipal.value = "";
     signoOperacion.innerHTML = "";
     numeroAHistorial.innerHTML = "";
     numeroBHistorial.innerHTML = "";
     operadorHistorial.innerHTML = "";
}




// funciones par los operadores 
function Suma(){
    operadorHistorial.innerHTML = "+";
    signoOperacion.innerHTML = "+";
    validaciones();
}
function Resta() {
    operadorHistorial.innerHTML = "-";
    signoOperacion.innerHTML = "-";
    validaciones();
}
function Multiplicacion() {
    operadorHistorial.innerHTML = "x";
    signoOperacion.innerHTML = "x";
    validaciones();
}
function Division() {
    operadorHistorial.innerHTML = "/";
    signoOperacion.innerHTML = "/";
    validaciones();
}