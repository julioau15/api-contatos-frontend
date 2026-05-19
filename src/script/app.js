'use strict'
import { getContatos, postContato, deleteContato, putContato, getContatoById } from "./contatos.js"
import {montarTabela} from "./montarTabela.js"

const container = document.getElementById('container')
const contatos = await getContatos()
const linhas = montarTabela(contatos)
container.replaceChildren(...linhas)

const btnAtualizar = document.getElementById('btn-atualizar')
const btnApagar = document.getElementById('btn-apagar')

btnAtualizar.addEventListener('click', await putContato())
btnApagar.addEventListener('click', await deleteContato())