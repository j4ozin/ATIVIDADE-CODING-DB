let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

let media = (nota1 + nota2) / 2;
let conceito;

if (media >= 9.0 && media <= 10.0) {
    conceito = "A";
} else if (media >= 7.5 && media < 9.0) {
    conceito = "B";
} else if (media >= 6.0 && media < 7.5) {
    conceito = "C";
} else if (media >= 4.0 && media < 6.0) {
    conceito = "D";
} else {
    conceito = "E";
}

console.log("A média é: " + media.toFixed(2));
console.log("O conceito é: " + conceito);
