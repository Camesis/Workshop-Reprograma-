var salario = document.querySelector("#ganho-mes") //Variavel para o saladrio
var horadia = document.querySelector("#horas-dia") //Variavel para as horas por dia
var resposta = document.querySelector("#resposta") //Variavel da resposta
//teste para ver se chama no console
    console.log(resposta)
    console.log(horadia)
    console.log(salario)
//Função 
function calcularValorHora(){
    var valorhora = (salario.value / 22) / horadia.value // variavel para o calculo do valor hora (salariodigitado/22)/horadia digitado
    resposta.textContent = "R$ " + valorhora.toFixed(2)  //concatenação com texto e a variavel com o calculo atribuido ao rsposta.textContent e o calculo e o .tofixed para solicitar o numero de casas decimais
}
