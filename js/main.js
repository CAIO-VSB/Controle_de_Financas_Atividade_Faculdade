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
    let total = Number(inputSegunda.value) + Number(inputTerca.value) + Number(inputQuarta.value) + Number(inputQuinta.value) + Number(inputSexta.value) + Number(inputSabado.value) + Number(inputDomingo.value)

    let media = total / 7

    totalSemana.innerText = "💰 Você gastou ao todo R$ " + total.toFixed(2) + " nesta semana!"

    totalMedia.innerText = "📊 Sua média diária foi de R$ " + media.toFixed(2)

}



