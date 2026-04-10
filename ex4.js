function opsLogicos () { 
    let idade = 20 
    let temCNH = true 

    let podeDirigir = idade >= 18 && temCNH; 

    return `pode dirigir? ${podeDirigir}`;
}
export{opsLogicos}