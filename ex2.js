function opsAritimeticos (A,B) { 
   

    let soma = A + B 
    let subtração = A - B  
    let divisão = A / B 
    let multiplicação = A * B 

    return `soma: ${ soma}<br>, subtração: ${subtração}<br>, divisão: ${divisão}<br>, multiplicação: ${multiplicação}`
}

export {opsAritimeticos}