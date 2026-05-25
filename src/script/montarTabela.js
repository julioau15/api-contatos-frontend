'use strict'

const montarLinhas = (dados, atualizarContato, apagarContato) => {
    let linha = document.createElement('tr')
    let colId = document.createElement('td')
    let colNome = document.createElement('td')
    let colTelefone = document.createElement('td')
    let colEmail = document.createElement('td')
    let colEndereco = document.createElement('td')
    let colCidade = document.createElement('td')
    let colAcao = document.createElement('td')
    let colFoto = document.createElement('td')
    let img = document.createElement('img')
    let btnAtualizar = document.createElement('button')
    let btnApagar = document.createElement('button')

    colId.textContent = dados.id
    colId.id = 'id'

    colNome.textContent = dados.nome
    colNome.className = 'nome'

    colTelefone.textContent = dados.celular
    colTelefone.className = 'telefone'

    colEmail.textContent = dados.email
    colEmail.className = 'email'

    colEndereco.textContent = dados.endereco
    colEndereco.className = 'endereco'

    colCidade.textContent = dados.cidade
    colCidade.className = 'cidade'

    img.src = dados.foto
    img.alt = `foto de ${dados.nome}`
    img.className = 'foto'

    btnAtualizar.textContent = 'EDITAR'
    btnAtualizar.className = 'btn-atualizar'
    btnAtualizar.addEventListener('click', () => atualizarContato(dados))

    btnApagar.textContent = 'APAGAR'
    btnApagar.className = 'btn-apagar'
    btnApagar.addEventListener('click', () => apagarContato(dados.id))

    linha.dataset.id = dados.id

    colAcao.id = 'td-acao'
    colAcao.replaceChildren(btnAtualizar, btnApagar)

    colFoto.replaceChildren(img)

    linha.replaceChildren(
        colId,
        colNome,
        colTelefone,
        colEmail,
        colEndereco,
        colCidade,
        colFoto,
        colAcao
    )
    return linha
}

export const montarTabela = (data, atualizarContato, apagarContato) => {
    const linhas = data.map(dados =>
        montarLinhas(dados, atualizarContato, apagarContato)
    )

    return linhas
}