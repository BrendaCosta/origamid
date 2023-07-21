const agora = new Date();
const promocao = new Date('December 24 2022 23:59')

function converterEmDias(time){
    return time / (24 * 60 * 60 *1000)
}

const diasAgora = converterEmDias(agora)
const diasPromocao = converterEmDias(promocao)

const faltam = diasPromocao - diasAgora;

console.log(faltam)