
function estruturaSwitchCase () { 
    let dia = 3 ; 
    let resultado ; 

    switch ( dia ){ 
        case 1: 
          resultado = "domingo";
          break; 
        case 2: 
          resultado = "segunda"; 
       break; 
        case 3: 
          resultado = "terça";
          break;
    default : 
          resultado = "dia invalido";

    }

    return `exercicios 6 - estruturaSwitchCase
  dia: ${dia}
  resultado $ {resultado}`

}
export {estruturaSwitchCase}

