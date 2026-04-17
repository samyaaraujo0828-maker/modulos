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
app.get('/ex2/', (req, res) => {
  let {A,B} = req.query
    
  A = Number (A);
  B = Number (B);

    res.send(opsAritimeticos(A,B));
  })
 
  app.get('/ex3/:', (req, res) => {
    let {a,b} = req.params

    
    res.send(opsRelacionais(a,b));
  })
  

  app.get('/ex4/:idade/:temCNH', (req, res) => {
    let {idade, temCNH} = req.params


    res.send(opsLogicos(idade, temCNH));
  })
 

  app.get('/ex5/: numero', (req, res) => {
    let {numero} = req.params

    res.send(estruturaIfElse(numero));
  })
 

  app.get('/ex6/:dia/: resultado', (req, res) => {
    let {dia, resultado} = req.params


    res.send(estruturaSwitchCase(dia, resultado));
  })
 

  app.get('/ex7/:resultado', (req, res) => {
    let {resultado} = req.params


    res.send(estruturaRepetiçao(resultado));
  })
 
  app.get('/ex8/:nome', (req, res) => {
    let {nome} = req.params


    res.send(vetores(nome))
  })




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})