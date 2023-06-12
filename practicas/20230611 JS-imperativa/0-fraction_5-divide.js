

const { Console } = require("../node_modules/console-mpds");
const console = new Console();

console.writeln(`Primera fracción:
Introduce el numerador de la fracción: 2
Introduce el denominador de la fracción: 3
Segunda fracción:
Introduce el numerador de la fracción: 3
Introduce el denominador de la fracción: 4

La división de la fracción 2/3 y la fracción 3/4 es la fracción 8/9`)

console.writeln("Primera fracción:")
const numerator1 = console.readNumber("Introduce el numerador de la fracción:")
const denominator1 = console.readNumber("Introduce el denominador de la fracción:")
console.writeln("Segunda fracción:/n")
const numerator2 = console.readNumber("Introduce el numerador de la fracción:")
const denominator2 = console.readNumber("Introduce el denominador de la fracción:")

console.writeln(`La división de la fracción ${numerator1}/${denominator1} y la fracción \
${numerator2}/${denominator2} es la fracción ${numerator1*denominator2}/${denominator2*denominator1}`)