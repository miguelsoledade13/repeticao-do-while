let soma = 0;
let continuar;

do{
    let numero = parseInt(prompt("Digite um número inteiro"));

    if (!isNaN(numero)) {
        soma += numero;
    } else {
        alert("Valor inválido! Digite um número inteiro.");
    }
    continuar = prompt("Quer inserir outro número?  (s/n)").toLocaleLowerCase();
} while (continuar === "s");
alert("A soma total é: " + soma);