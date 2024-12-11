let vogais = "aeiou";

let entrada = prompt("Digite uma letra: ").toLowerCase();

if (vogais.includes(entrada)) {
    console.log("É uma vogal");
} else {
    console.log("É uma consoante");
}
