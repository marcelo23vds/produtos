'use strict'

import produtos from "./produtos_atualizados.json" with {type: 'json'}

function criarCards(produto){

    //sessao principal (main) do html que ja existe
    const sessaoPrincipal = document.getElementById('sessaoPrincipal')
    //adicionando com js um elemento novo (div)
    const cardProdutos = document.createElement('div')

    // adicionando a criação dos 6 elementos que o card vai possuir em constantes(ou variaveis)
    const imagem = document.createElement('img')
    const classificacao = document.createElement('p')
    const nome = document.createElement('span')
    const descricao = document.createElement('p')
    const preco = document.createElement('p')
    const categoria = document.createElement('p')

    //informando a source da imagem e o texto dos outros elementos, todas informações sendo retiradas do json que foi importado
    imagem.src = `./img/${produto.imagem}`
    classificacao.textContent = produto.classificacao
    nome.textContent = produto.nome
    descricao.textContent = produto.descricao
    preco.textContent = `R$ ${produto.preco}`
    categoria.textContent = produto.categoria
    
    //adicionando os 6 elementos em cada div
    cardProdutos.appendChild(imagem)
    cardProdutos.appendChild(classificacao)
    cardProdutos.appendChild(nome)
    cardProdutos.appendChild(descricao)
    cardProdutos.appendChild(preco)
    cardProdutos.appendChild(categoria)

    //colocando as divs dentro de main
    sessaoPrincipal.appendChild(cardProdutos)

}

function carregarCards(){
    produtos.forEach(criarCards)
}

carregarCards()