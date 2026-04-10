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

app.get('/ex1', (req, res) => {
  let declaracao = declaracaoDeVar()
  res.send(declaracao)
})

app.get('/ex2', (req, res) => {
    let ops = opsAritimeticos()
    res.send(ops)
  })
 
  app.get('/ex3', (req, res) => {
    let relacionais = opsRelacionais()
    res.send(relacionais)
  })
  

  app.get('/ex4', (req, res) => {
    let logicos = opsLogicos()
    res.send(logicos)
  })
 

  app.get('/ex5', (req, res) => {
    let estrutura = estruturaIfElse()
    res.send(estrutura)
  })
 

  app.get('/ex6', (req, res) => {
    let estruturaS = estruturaSwitchCase()
    res.send(estruturaSwitchCase())
  })
 

  app.get('/ex7', (req, res) => {
    let repeticao = estruturaRepetiçao()
    res.send(repeticao)
  })
 
  app.get('/ex8', (req, res) => {
    let vetor = vetores()
    res.send(vetor)
  })
 

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})