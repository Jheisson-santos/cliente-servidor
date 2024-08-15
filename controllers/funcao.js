
let somar = function somar(body){ 
       return (parseFloat(body.n1) + parseFloat(body.n2))
}
module.exports.somar = somar

let multiplicar = function multipl(body){
       return (parseFloat(body.n1) * parseFloat(body.n2))
}
module.exports.multiplicar = multiplicar

let porcentagem = function porcent(body){
       return (parseFloat(body.n1) * (parseFloat(body.n2))/100)
    
}
module.exports.porcentagem = porcentagem

 let subtrair = function subtra(body){ 
       return (parseFloat(body.n1) - parseFloat(body.n2))
}
module.exports.subtrair = subtrair

let dividir = function divisao(body){
       if(body.n1 > 0){
       return (parseFloat(body.n1) / parseFloat(body.n2))
       } else {
              return 'ERROR, Zero não pode ser um divisor'
       }
}
exports.dividir = dividir


