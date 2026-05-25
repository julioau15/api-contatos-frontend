'use strict'
import { getContatos, postContato, deleteContato, putContato, getContatoById } from "./contatos.js"
import {montarTabela} from "./montarTabela.js"

const btnDefault = document.getElementById('btn-default')

const inputNome = document.getElementById('nome')
const inputTelefone = document.getElementById('telefone')
const inputEmail = document.getElementById('email')
const inputEndereco = document.getElementById('endereco')
const inputCidade = document.getElementById('cidade')
const inputFoto = document.getElementById('foto')

let idContato = null

const atualizarPagina = async () => {
    const container = document.getElementById('container')
    const contatos = await getContatos()
    const linhas = montarTabela(contatos, atualizarContato, apagarContato)
    container.replaceChildren(...linhas)
}

const atualizarContato = async (dados) => {
    inputNome.value = dados.nome
    inputTelefone.value = dados.celular
    inputEmail.value = dados.email
    inputEndereco.value = dados.endereco
    inputCidade.value = dados.cidade
    inputFoto.value = dados.foto

    idContato = dados.id
}

const limparCampos = () => {
    inputNome.value = ''
    inputTelefone.value = ''
    inputEmail.value = ''
    inputEndereco.value = ''
    inputCidade.value = ''
    inputFoto.value = ''
}

const apagarContato = async (id) => {
    await deleteContato(id)
    await atualizarPagina()   
}

await atualizarPagina()

btnDefault.addEventListener('click', async () => {

    const contato = {
        "nome": inputNome.value,
        "celular": inputTelefone.value,
        "email": inputEmail.value,
        "endereco": inputEndereco.value,
        "cidade": inputCidade.value,
        "foto": inputFoto.value
    }

    if (idContato != null) {

        await putContato(contato, idContato)
        idContato = null

    } else {
        await postContato(contato)
    }

    limparCampos()
    await atualizarPagina()
})

