const candidatos = [
    {
        nome: "Nine Fingers",
        numero: 31,
        foto: "./assets/nineFingers.svg"
    },
    {
        nome: "Bolsonaldo",
        numero: 71,
        foto: "./assets/bolsonado.svg"
    },
    {
        nome: "Vilma",
        numero: 88,
        foto: "./assets/vilma.svg"
    }
]

let primeiroNumero = "3";

let segundoNumero = "1";

let numeroDigitado = primeiroNumero + segundoNumero;

let candidatoSelecionado = candidatos.find(candidato => candidato.numero == "31")