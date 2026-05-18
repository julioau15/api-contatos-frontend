'use strict'

// EndPoint da API
const URL = 'https://bakcend-fecaf-render.onrender.com/contatos'

// busca todos contatos
export const getContatos = async () => {
    const response = await fetch(URL)

    // cria um novo erro caso a API não responda como o esperado
    if(!response.ok) throw new Error('Erro ao buscar Contatos')
    return await response.json()
}

// busca contato pelo id
export const getContatoById = async (id) => {
    const response = await fetch(`${URL}/${id}`)
    if(!response.ok) throw new Error ('Erro ao buscar um contato')
    return await response.json()
}

// cria um contato novo
export const postContato = async (contato) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(URL, options)

    if(!response.ok) throw new Error ('Erro ao criar um novo contato')
    return await response.json()
}

// atualiza um contato
export const putContato = async (contato, id) => {
    const options  = {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(`${URL}/${id}`, options)

    if(!response.ok) throw new Error('Erro ao atualizar um contato')
    return response
}

// apaga um contato
export const deleteContato = async (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    }
    const response = await fetch(`${URL}/${id}` , options)

    if(!response.ok) throw new Error('Erro ao apagar um contato')
    return true
}