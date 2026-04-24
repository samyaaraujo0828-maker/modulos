import express from 'express'


import {declaracaoDeVar} from './ex1.js';
import {opsAritimeticos} from './ex2.js';
import {opsRelacionais} from './ex3.js';
import {opsLogicos} from './ex4.js';
import {estruturaIfElse} from './ex5.js';
import {estruturaSwitchCase} from'./ex6.js';
import {estruturaRepetiçao} from './ex7.js';
import {vetores} from './ex8.js';


const app = express()

app.get('/ex1/:nome/:idade/:curso', (req, res) => {
  let {nome,idade,curso} = req.params

  
  res.send(declaracaoDeVar(nome,idade,curso));
})

// ?A=30&B=60
app.get('/ex2', (req, res) => {
  let {A,B} = req.query
    
  A = Number (A);
  B = Number (B);

    res.send(opsAritimeticos(A,B));
  })
 
  app.get('/ex3/:a/:b', (req, res) => {
    let {a,b} = req.params

    a = Number (a);
    b = Number (b);

    res.send(opsRelacionais(a,b));
  })
  

  app.get('/ex4/:idade', (req, res) => {
    let {idade} = req.params
    let temCNH = idade>= 18
    idade = Number (idade);
    let podeDirigir = idade >= 18 && temCNH; 
    res.send(opsLogicos(idade, temCNH));
  })
 

  app.get('/ex5/:numero', (req, res) => {
    let {numero} = req.params
    numero = Number (numero)
    res.send(estruturaIfElse(numero));
  })
 

  app.get('/ex6/:dia', (req, res) => {
    let {dia  } = req.params
    
    dia = Number (dia)
    res.send(estruturaSwitchCase(dia));
  })
 

  app.get('/ex7/:resultado', (req, res) => {
    let {resultado} = req.params


    res.send(estruturaRepetiçao(resultado));
  })
 
  app.get('/ex8/:primeiro/:ultimo/:tamanho', (req, res) => {
    let {primeiro, ultimo, tamanho} = req.params


    res.send(vetores(primeiro, ultimo, tamanho))
  })




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})