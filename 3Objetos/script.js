// // Utilizando o foreach na array abaixo,
// // some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//     {
//       descricao: 'Taxa do Pão',
//       valor: 'R$ 39',
//     },
//     {
//       descricao: 'Taxa do Mercado',
//       valor: 'R$ 129',
//     },
//     {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 99',
//     },
//     {
//       descricao: 'Taxa do Banco',
//       valor: 'R$ 129',
//     },
//     {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 49',
//     },
//   ];

  
//   const totalTaxas = 0;
//   let valoresTaxas = 0;
//   let valoresRecebidos = 0;
  
//   transacoes.forEach((item) =>{
//     const numero = +item.valor.replace('R$ ', ' ')
//     if(item.descricao.slice(0,4) === "Taxa"){
//         valoresTaxas = valoresTaxas + numero 
//     }else if (item.descricao.slice(0,4) === "Rece"){
//         valoresRecebidos = valoresRecebidos + numero
        
//     }
// })

// console.log("taxas: " + valoresTaxas) 
// console.log("valores recebidos: " + valoresRecebidos) 






  
//   // Retorne uma array com a lista abaixo
//   const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
 
//   console.log(Array.from( transportes.split(';')))
  
//   // Substitua todos os span's por a's
//   let html = `<ul>
//                   <li><span>Sobre</span></li>
//                   <li><span>Produtos</span></li>
//                   <li><span>Contato</span></li>
//                 </ul>`;


//    console.log( html.split('span').join('a'))

  
//   // Retorne o último caracter da frase
//   const frase = 'Melhor do ano!';

//   console.log(frase.substr(-1))
  
//   // Retorne o total de taxas
//   const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  
  // Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let total = 0;
const compra = compras.forEach((item) =>{
  novoItem = +item.preco.replace("R$" , " ").replace( ",", ".")
  total +=novoItem 
})
console.log(total)

const valorTotal = compras.reduce((acumulador, item) =>{
  const precoLimpo = +item.preco.replace('R$ ', "").replace(",",".");
  return acumulador + precoLimpo
}, 0)

console.log(valorTotal)