/*
function greet(greeting, name){
    return greeting + " " + name + "!";
}

console.log(greet("Bye", "Peter"));
*/

var numbers = [1, 4, 6, 3, 9, 12, 15, 10];

function double(numbers){
    var result = [];
    
    for (var i = 0; i < numbers.length; i++){
        result.push(numbers[i] * 2);
    }
    return result;
}

console.log (double(numbers));


function triple(numbers){
    var result = [];
    
    for (var i = 0; i < numbers.length; i++){
        result.push(numbers[i] * 3);
    }
    return result;
}

console.log (triple(numbers));


function espar(numbers){
    var resultado = [];
    for (var i=0; i<numbers.length; i++){
        if (numbers[i]%2 == 0){
            resultado.push(true);
        }else{
            resultado.push(false);
        }
    }
}
console.log (espar(numbers));

/*crear una funcion que multiplique por 3 los elementos de un array
funcion que diga si los elemntos son pares o impares (ver video)*/