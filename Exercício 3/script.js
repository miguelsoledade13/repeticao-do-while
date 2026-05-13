let numeroSecreto = 4;
let tentativa
let tentativas = 0;

while (tentativa !== numeroSecreto) {
    tentativa = parseInt(prompt("Tenta adivivinhar o número entre 1 a 10."));
    tentativas++;

    if (tentativa !== numeroSecreto) {
        alert ("Errado! Tenta denovo.");
    }   
}

alert("Boa, Você acertou o número " + numeroSecreto + " em " + tentativas + " tentativas.");