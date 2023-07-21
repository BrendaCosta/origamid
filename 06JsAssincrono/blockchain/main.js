const btcDisplay = document.querySelector(".valor")

function fetchBTC(){
    fetch('https://www.blockchain.com/ticker')
    .then(response => response.json())
    .then(btcJson =>{
        btcDisplay.innerText = (`R$ `+ btcJson.BRL.buy).replace('.',',')
    })
}

setInterval(fetchBTC, 1000)