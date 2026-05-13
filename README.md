# Exercícios JavaScript

## 1. Soma com Confirmação

```javascript
let soma = 0;
let continuar;

do {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (!isNaN(numero)) {
        soma += numero;
    } else {
        alert("Valor inválido!");
    }

    continuar = prompt("Deseja inserir outro número? (s/n)").toLowerCase();

} while (continuar === "s");

alert("A soma total é: " + soma);
2. Jogo de Adivinhação
let numeroSecreto = 7;
let tentativa;
let tentativas = 0;

while (tentativa !== numeroSecreto) {
    tentativa = parseInt(prompt("Tente adivinhar o número entre 1 e 10:"));
    tentativas++;

    if (tentativa !== numeroSecreto) {
        alert("Errado! Tente novamente.");
    }
}

alert("Parabéns! Você acertou em " + tentativas + " tentativas.");
3. Validação de Cadastro
let nomeProduto;

do {
    nomeProduto = prompt("Digite o nome do produto:");

    if (nomeProduto.length < 3) {
        alert("Nome inválido. O produto deve ter no mínimo 3 caracteres.");
    }

} while (nomeProduto.length < 3);

alert("Produto cadastrado com sucesso!");
4. Sistema de Cafeteria
let total = 0;
let opcao;

do {
    opcao = prompt(
        "1 - Café Expresso (R$ 5,00)\n" +
        "2 - Cappuccino (R$ 7,00)\n" +
        "3 - Pão de Queijo (R$ 4,00)\n" +
        "0 - Finalizar Pedido"
    );

    switch (opcao) {
        case "1":
            total += 5;
            alert("Café Expresso adicionado.");
            break;

        case "2":
            total += 7;
            alert("Cappuccino adicionado.");
            break;

        case "3":
            total += 4;
            alert("Pão de Queijo adicionado.");
            break;

        case "0":
            alert("Finalizando pedido...");
            break;

        default:
            alert("Opção inválida.");
    }

} while (opcao !== "0");

alert("Pedido finalizado. Total: R$ " + total.toFixed(2));



<img width="374" height="498" alt="Sans6GIF" src="https://github.com/user-attachments/assets/f0011fa4-9b97-4317-a7de-47dedfd150a4" />


<img width="374" height="498" alt="67BunnyGIF (2)" src="https://github.com/user-attachments/assets/2e047ccb-d9b4-44e8-a33f-fa76684f2576" />
