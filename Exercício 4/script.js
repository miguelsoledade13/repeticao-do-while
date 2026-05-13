let nomeProduto;

do {
    nomeProduto = prompt("Escreva o nome do produto:");
    if (nomeProduto.length < 3) {
        alert ("Nome inválido. O poduto deve ter no mínimo 3 caracteres.");
    }
} while (nomeProduto.length < 3);
alert("Produto cadastrado com sucesso: " + nomeProduto);