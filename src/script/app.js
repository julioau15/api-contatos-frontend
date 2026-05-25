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

const validarCampos = () => {
    let message = false

    if(inputNome.value == undefined || inputNome.value == null || inputNome.value == '')
        return message = '[ERRO] Nome Invalido!'

    if(inputTelefone.value == undefined || inputTelefone.value == null || inputTelefone.value == '')
        return message = '[ERRO] Telefone Invalido!'

    if(inputEmail.value == undefined || inputEmail.value == null || inputEmail.value == '')
        return message = '[ERRO] Email Invalido!'

    if(inputEndereco.value == undefined || inputEndereco.value == null || inputEndereco.value == '')
        return message = '[ERRO] Endereço Invalido!'

    if(inputCidade.value == undefined || inputCidade.value == null || inputCidade.value == '')
        return message = '[ERRO] Cidade Invalido!'

    if(inputFoto.value == undefined || inputFoto.value == null || inputFoto.value == '')
        return message = '[ERRO] Foto Invalido!'

    return message
}

const limparCampos = () => {
    inputNome.value = ''
    inputTelefone.value = ''
    inputEmail.value = ''
    inputEndereco.value = ''
    inputCidade.value = ''
    inputFoto.value = ''
}

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

const apagarContato = async (id) => {
    const confirmacao = confirm('Deseja Apagar este Contato?')

    if(confirmacao){
        await deleteContato(id)
        await atualizarPagina()   
    }
}

await atualizarPagina()

btnDefault.addEventListener('click', async () => {

    let validar = validarCampos()
    if(validar) return alert(validar)

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

