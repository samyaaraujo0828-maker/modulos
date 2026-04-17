function opsLogicos (idade, temCNH) { 
    
    let podeDirigir = idade >= 18 && temCNH; 

    return `pode dirigir? ${podeDirigir}`;
}
export{opsLogicos}