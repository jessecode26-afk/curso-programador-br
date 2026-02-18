// - Condição simples com if
// - Estrutura if/else
// - Uso de else if
// - Operadores relacionais (>, <, >=, <=, ===, !==)
// Condição simples
// switch
// let idade = 18;

// if (idade >= 18) {
//   console.log("Maior de idade");
// }

// // If e Else
// let nota = 6;

// if (nota >= 5) {
//   console.log("Aprovado");
// } else {
//   console.log("Reprovado");
// }

// // Else if
// let hora = 24;

// if (hora < 19) {
//   console.log("Bom dia");
// } else if (hora < 18) {
//   console.log("Boa tarde");
// } else {
//   console.log("Boa noite");
// }

// TESTANDO LOGICAS

let nota1 = 5;
let nota2 = 8;

let conceito;

let media = (nota1 + nota2) / 2;

if (media >= 8) {
  conceito = "otimo";
} else if (media >= 6.5) {
  conceito = "bom";
} else {
  conceito = "Regular";
}

console.log(media);
console.log(conceito);

switch (conceito) {
  case "otimo":
    console.log("Parabens vc é um otmo aluno");
    break;
  case "bom":
    console.log("vc precisa estudar mais");
    break;
  case "Regular":
    console.log("voce nao atingiu nota suficiente está REPROVADO");
    break;
  default:
    console.log("DEU ERRO");
}
