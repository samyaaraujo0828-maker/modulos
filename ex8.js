function vetores (nomes ){ 
   
    let primeiro = nomes [ 0 ]
    let ultimo = nomes [nomes.length - 1]; 
    let tamanho = nomes . length;

    return `primeiro : ${primeiro}, ultimo: ${ultimo}, tamanho: ${tamanho}`;
            
   
}

export {vetores}