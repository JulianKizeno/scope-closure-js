// var nameOfDog; // undefined
// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog)

var elmo; // undefined - variable elevada
function nameOfDog() {
    console.log(`El mejor perro es ${elmo}`);
} // funcion elevada

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perro es ${elmo}`);
}

var elmo = 'Elmo';