let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

let numeros = [num1, num2, num3];
numeros.sort((a, b) => b - a);

console.log("Números em ordem decrescente: " + numeros.join(", "));
