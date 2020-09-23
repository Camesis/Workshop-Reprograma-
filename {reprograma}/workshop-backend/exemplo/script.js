///Precisamos pegar o valor do input de ano
//PRecisamos pegar o elemento da resposta
var ano = document.querySelector("#ano")
var resposta = document.querySelector("#respostaAno")
var anoNascimento = 2001
 //ano do inputo - ano que eu nasci = a minha idade
    console.log(ano)
    console.log(resposta)

//Precisamos colocar o valor do input na resposta
function escrever(){
    //.value para saber o valor de um input
    var minhaIdade = ano.value - anoNascimento
    resposta.textContent = minhaIdade
}

function escreverNoConsole(){
    console.log("Olá")

}
escreverNoConsole()
