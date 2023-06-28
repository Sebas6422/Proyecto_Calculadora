var btnAC = document.getElementById('ac');
var pantalla = document.getElementById('resultado');
var operacionA;
var operacionB;
var operacion;
var resultado;

function presionarN(num){
    if(pantalla.textContent == "0"){
        pantalla.textContent = num.value;
    }
    else{
        pantalla.textContent = pantalla.textContent + num.value;
    }
}

function presionarAC(){
    pantalla.textContent = "0";
}

function limpiar(){
    pantalla.textContent = "0";
}

function resetear(){
    operacionA = 0;
    operacionB = 0;
    operacion = "";
}

function oper(oper){
    operacionA = pantalla.textContent;
    operacion = oper.value;
    limpiar();
    
}

function realizar(){
    operacionB = pantalla.textContent;
    switch(operacion){
        case "+":
            resultado = parseFloat(operacionA) + parseFloat(operacionB);
            break;
        case "-":
            resultado = parseFloat(operacionA) - parseFloat(operacionB);
            break;
        case "x":
            resultado = parseFloat(operacionA) * parseFloat(operacionB);
            break;
        case "/":
            resultado = parseFloat(operacionA) / parseFloat(operacionB);
            break;
    }

    pantalla.textContent = resultado;
}

btnAC.addEventListener('click', presionarAC, false);
