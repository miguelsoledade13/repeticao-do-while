let total = 0;
let opcao;

do {
    opcao = prompt(
        "      Cafeteria \n" +
        "1 - Café expresso (R$ 45)\n" +
        "2 - Cappuchino (R$ 70)\n" +
        "3 - Misto quente (R$ 80)\n" +
        "0 - Finalizar Pedido"
    );

    switch (opcao) {
        case "1":
            total += 45;
            alert("Café expresso adicionado ao pedido.");
            break;

        case "2":
            total += 70;
            alert("Cappuchino adicionado ao pedido.");
            break;
        
        case "3":
            total += 80;
            alert("Misto quente adicionado ao pedido.");
            break;

        case "0":
            alert("Finalizando pedido.");
            break;

        default:
            alert("Opção inválida.");
    }
} while (opcao !== "0");
alert("Pedido Finalizado. O total da sua conta é R$ " + total.toFixed(2));