let periodo = prompt("Digite M para Matutino, V para Vespertino ou N para Noturno: ").toUpperCase();

switch (periodo) {
    case 'M':
        console.log("Bom dia");
        break;
    case 'V':
        console.log("Boa tarde");
        break;
    case 'N':
        console.log("Boa noite");
        break;
    default:
        console.log("Valor inválido");
}
