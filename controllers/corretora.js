let increment = 1

let add = (body)=>{
    let id = increment
    increment++
    let nome = body.nome
    return [nome, id]
}
module.exports.add = add