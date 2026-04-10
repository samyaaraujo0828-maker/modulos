function opsAritimeticos () { 
    let A = 10 
    let B = 5

    let soma = A + B 
    let subtração = A - B 
    let divisão = A / B 
    let multiplicação = A * B 

    return `soma: ${ soma}, subtração: ${subtração}, divisão: ${divisão}, multiplicação: ${multiplicação}`
}

export {opsAritimeticos}