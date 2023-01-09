// variables

var a; // declarando
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignación   
var a = 'aa'; // redeclaración


// Global Scope
var fruit = 'Apple'; // Global
console.log(fruit)
function bestFruit() {
    console.log(fruit)
}

bestFruit();

function countries() {
    country = 'Colombia'; //
    console.log(country)
}

countries()
console.log(country)