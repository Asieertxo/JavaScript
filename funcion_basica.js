/*
function greet(greeting, name){
    return greeting + " " + name + "!";
}

console.log(greet("Bye", "Peter"));
*/

var numbers = [1, 4, 6];

function double(numbers){
    var result = [];
    
    for (var i = 0; i < numbers.length; i++){
        result.push(numbers[i] * 2);
    }
    return result;
}

console.log (double(numbers));


/*crear una funcion que multiplique por 3 los elementos de un array
funcion que diga si los elemntos son pares o impares (ver video)*/