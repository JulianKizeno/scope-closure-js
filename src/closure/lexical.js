const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // Funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();


// En este desafío recibirás dos números aleatorios por parámetros.

// Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:

// La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

// Input: sumWithClosure(2)(3);

// Output: 5

// Input: sumWithClosure(90)();

// Output: 90

function sumWithClosure(firstNum) {

    firstNum === undefined && (firstNum = 0);

    function sumNumbers(secondNum){
        secondNum === undefined && (secondNum = 0);

        const result = firstNum + secondNum;
        
        return result;
    }

    return sumNumbers
}

sumWithClosure()();