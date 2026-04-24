function vetores (primeiro, ultimo, tamanho, nomes){ 
   
     primeiro = nomes [ 0 ]
     ultimo = nomes [nomes.length - 1]; 
     tamanho = nomes . length;

    return `primeiro : ${primeiro}, ultimo: ${ultimo}, tamanho: ${tamanho}`;
            
   
}

export {vetores}