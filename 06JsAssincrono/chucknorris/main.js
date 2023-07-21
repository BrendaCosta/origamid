const MostrarPiada = document.querySelector(".piada")
const btnPiada = document.querySelector(".btnPiada")




btnPiada.addEventListener('click', handleClick)


 function handleClick(event){
     event.preventDefault();
     buscarPiada()
 }

async function buscarPiada(){
    await fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json())
    .then(body =>{
        MostrarPiada.innerText = body.value
    })
}




