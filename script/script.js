const candidatos = [
    {
        nome: "Nine Fingers",
        numero: 31,
        foto: "./assets/nineFingers.svg"
    },
    {
        nome: "Bolsonaldo",
        numero: 71,
        foto: "./assets/bolsonaldo.svg"
    },
    {
        nome: "Vilma",
        numero: 88,
        foto: "./assets/vilma.svg"
    }
]

let numeroDigitado = "";

function digitarNumero(numero) {
    numeroDigitado += numero

    if (numeroDigitado.length == 2) {
        console.log("numeroDigitado:", numeroDigitado);
        let candidatoSelecionado = candidatos.find(candidato => candidato.numero === Number(numeroDigitado));

        console.log(candidatoSelecionado);

        document.getElementById("numero").innerHTML = candidatoSelecionado.numero;

        document.getElementById("foto").src = candidatoSelecionado.foto;

        document.getElementById("nome").innerHTML = candidatoSelecionado.nome;
    }

}