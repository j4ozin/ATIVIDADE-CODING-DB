let preco1 = parseFloat(prompt("Digite o preço do primeiro produto: "));
let preco2 = parseFloat(prompt("Digite o preço do segundo produto: "));
let preco3 = parseFloat(prompt("Digite o preço do terceiro produto: "));

let menorPreco = Math.min(preco1, preco2, preco3);

if (menorPreco === preco1) {
    console.log("Você deve comprar o primeiro produto.");
} else if (menorPreco === preco2) {
    console.log("Você deve comprar o segundo produto.");
} else {
    console.log("Você deve comprar o terceiro produto.");
}
