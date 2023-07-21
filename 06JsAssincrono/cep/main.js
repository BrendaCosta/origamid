const cepDigitado = document.querySelector("#cepDigitado")
const btnCep = document.querySelector(".btn")
const resultadoCep = document.querySelector(".resultadoCep")

btnCep.addEventListener('click', handleClick)


function handleClick(event){
    event.preventDefault();
    const cep = cepDigitado.value
    buscarCep(cep)
}

async function buscarCep(cep){
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body =>{
        resultadoCep.innerText = body
    })
}




