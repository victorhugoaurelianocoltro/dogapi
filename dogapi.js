'use strict'

async function pesquisarFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response =  await fetch(url)   // puxando

    const data = await response.json()

    console.log (data)
    return data.message   // retorna uma mensagem 
}

function criarImagem (link){
const galeria = document.getElementById('galeria')
const novaImg = document.createElement('img')


novaImg.src = link
galeria.appendChild(novaImg)

}


async function preencherFotos () {
    const raca = document.getElementById('raca').value
    const fotos =await pesquisarFotos(raca)
 const galeria = document.getElementById('galeria')

 galeria.replaceChildren('')

 console.log (fotos)

 fotos.forEach(criarImagem)
    

}

document.getElementById('pesquisar')
        .addEventListener('click', preencherFotos)