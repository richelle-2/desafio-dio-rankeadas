function matches(victory, defeat){
    let result = victory - defeat
    return result
}

function rank(){
    let resultrank = matches(50, 20)
    let nível =""
    if(resultrank <= 10){
        nível = "ferro"
    } else if (resultrank <= 20){
        nível = "bronze"
    } else if (resultrank <= 50){
        nível = "prata"
    } else if (resulrank <= 80){
        nível = "ouro"
    } else if (resultrank <= 90){
        nível = "diamante"
    } else if (resultrank <= 100){
        nível = "lendário"
    } else if (resultrank >= 100){
        nível = "imortal"
}
  return 'o herói tem de saldo de ${resultrank} e está no nível de ${nível}'
}

console.log(rank())