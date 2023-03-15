////////////////////   EJERCICIO FINAL    //////////
let numA = 0
let numB = 0

function suma(numA, numB){
    numA = Number(prompt("Ingrese un numero"));
    numB = Number(prompt("Ingrese un numero"));
    return alert(numA + numB);
    
}

function resta(numA, numB){
    numA = Number(prompt("Ingrese un numero"));
    numB = Number(prompt("Ingrese un numero"));
    return alert(numA - numB);
}

function division(numA, numB){

     
    numA = Number(prompt("Ingrese un numero"));
    numB = Number(prompt("Ingrese un numero"));
    while (numB == 0){
        numB = Number(prompt("Ingrese un numero que no sea 0"));
    }
    return alert(numA / numB)
}

function multiplicacion(numA, numB){
    numA = Number(prompt("Ingrese un numero"));
    numB = Number(prompt("Ingrese un numero"));
    return alert(numA * numB);
}


let operacion = " "
let eleccion = " "

function calculadora (){
    
    do{
        operacion = prompt("ingrese la operacion que desea realizar \n+  \n-  \n*  \n/ o esc para salir ").toLowerCase()
        if (operacion != "esc"){
            
        switch (operacion){
        
        case "+": suma(numA,numB);
        
        break;

        case "-": resta(numA,numB);
        
        break;

        case "/": division(numA,numB);
        
        break;

        case "*": multiplicacion(numA,numB);
        
        break;

        default: alert("OPCION INVALIDA. ingrese alguna opcion mencionada anteriormente")
        break;

        
    }}
    
} while (operacion != "esc")

}

calculadora()



