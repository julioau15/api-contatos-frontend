'use strict'
import { getContatos, postContato, deleteContato, putContato, getContatoById } from "./contatos.js"
import {montarTabela} from "./montarTabela.js"

const container = document.getElementById('container')
const contatos = await getContatos()
const linhas = montarTabela(contatos)
container.replaceChildren(...linhas)

const btnAtualizar = document.querySelectorAll('.btn-atualizar')
const btnApagar = document.querySelectorAll('.btn-apagar')

btnAtualizar.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const id = event.target.closest('tr').dataset.id
        console.log(`atualizando id ${id}`)
    })
}) 

btnApagar.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const id = event.target.closest('tr').dataset.id
        console.log(`apagando id ${id}`)
    })
}) 