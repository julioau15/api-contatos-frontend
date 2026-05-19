'use strict'

const montarLinhas = (dados) => {
    let linha = document.createElement('tr')
    let colId = document.createElement('td')
    let colNome = document.createElement('td')
    let colTelefone = document.createElement('td')
    let colEmail = document.createElement('td')
    let colEndereco = document.createElement('td')
    let colCidade = document.createElement('td')
    let colAcao = document.createElement('td')
    let btnAtualizar = document.createElement('button')
    let btnApagar = document.createElement('button')

    colId.textContent = dados.id
    colNome.textContent = dados.nome
    colTelefone.textContent = dados.celular
    colEmail.textContent = dados.email
    colEndereco.textContent = dados.endereco
    colCidade.textContent = dados.cidade
    btnAtualizar.textContent = 'EDITAR'
    btnApagar.textContent = 'APAGAR'
    btnAtualizar.className = 'btn-atualizar'
    btnApagar.className = 'btn-apagar'

    linha.dataset.id = dados.id

    colAcao.id = 'td-acao'
    colAcao.replaceChildren(btnAtualizar, btnApagar)

    linha.replaceChildren(
        colId,
        colNome,
        colTelefone,
        colEmail,
        colEndereco,
        colCidade,
        colAcao
    )
    return linha
}

export const montarTabela = (data) => {
    const linhas = data.map(montarLinhas)
    return linhas
}