const { Console } = require("../node_modules/console-mpds");
const console = new Console();


`Primera fracción:
Introduce el numerador de la fracción: 2
Introduce el denominador de la fracción: 3
Segunda fracción:
Introduce el numerador de la fracción: 3
Introduce el denominador de la fracción: 4

La resta de la fracción 2/3 y la fracción 3/4 es la fracción 17/12`;

console.writeln("Primera fracción/n")
const numerator = console.readNumber("Introduce el numerador de la fracción: ");
const denominator = console.readNumber("Introduce el denominador de la fracción: ");
console.writeln("Segunda fracción/n")
const secondNumerator = console.readNumber("Introduce el numerador de la fracción: ");
const secondDenominator = console.readNumber("Introduce el denominador de la fracción: ");

const sumNumerators = numerator * secondDenominator - secondNumerator * denominator;
const sumDenominators = denominator * secondDenominator;


console.writeln(`La resta de la fracción ${numerator}/${denominator} y la fracción ${secondNumerator}/${secondDenominator}\
 es la fracción ${sumNumerators}/${sumDenominators}`)
