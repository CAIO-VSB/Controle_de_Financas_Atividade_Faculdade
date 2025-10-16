let Teste = document.getElementById("teste")
let totalSemana = document.getElementById("totalSemana")
let totalMedia = document.getElementById("totalMedia")
let inputSegunda = document.getElementById("input-segunda")
let inputTerca = document.getElementById("input-terca")
let inputQuarta = document.getElementById("input-quarta")
let inputQuinta = document.getElementById("input-quinta")
let inputSexta = document.getElementById("input-sexta")
let inputSabado = document.getElementById("input-sabado")
let inputDomingo = document.getElementById("input-domingo")


function CalcularTotalMedia() {

  let total = Number(inputSegunda.value) +
              Number(inputTerca.value) +
              Number(inputQuarta.value) +
              Number(inputQuinta.value) +
              Number(inputSexta.value) +
              Number(inputSabado.value) +
              Number(inputDomingo.value);

    let media = total / 7

    totalSemana.innerText = "💰 Você gastou ao todo R$ " + total.toFixed(2) + " nesta semana!"

    totalMedia.innerText = "📊 Sua média diária foi de R$ " + media.toFixed(2)

}


function teste() {

    let totalGasto = 0

    for (let i = 1; i < 8; i++) {
        let gasto = Teste
        gasto = parseFloat(gasto.value)
        totalGasto += gasto
        console.log(totalGasto)
    }

}



