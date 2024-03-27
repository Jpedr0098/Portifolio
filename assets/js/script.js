//Tratamento de eventos
document.querySelector('#paginas').addEventListener('change', calcular)
document.querySelector('#tipo').addEventListener('change', calcular)
document.querySelector('#prototipo_sim').addEventListener('change', calcular)
document.querySelector('#prototipo_nao').addEventListener('change', calcular)

document.querySelector('#prazo').addEventListener('input', function () {
    //função discreta
    const prazo = document.querySelector('#prazo').value
    document.querySelector('label[for=prazo]').innerText = "Prazo: "+prazo+' semanas'

    calcular()
})

function calcular(){
    //DOM - Document Obeject Model
    let valor = 0

    const qtdePag = document.querySelector('#paginas').value
    valor = qtdePag*1000

    const tipo = document.querySelector('#tipo').value
    if (tipo==2) valor += 2000

    const protipo = document.querySelector('#prototipo_sim').checked
    if (protipo) valor *= 1.1

    

    document.querySelector('#valor').innerText = 'R$ '+valor.toFixed(2)
}
