// import { atividades } from "./atividades.js"
const OlElement = document.getElementById('atvs')

const atividades = [{
    "titulo": "media querie",
    "descricao": "desenvolver site utilizando media querie",
    "url": "./media-queries/"
},
{
    "titulo": "Somatório",
    "descricao": "Fazer um site que soma valores ao clicar no botão",
    "url": "./somatorio/"
},
{
    "titulo": "Sorteio",
    "descricao": "Criar um site de sorteio de números entre valores previamente especificados",
    "url": "./sorteio/"
},
{
    "titulo": "Objeto",
    "descricao": "Criar um site que recebe valores e mostra na tela",
    "url": "./objeto/"
},
{
    "titulo": "Separador",
    "descricao": "Criar um site que recebe uma palavra e mostra na tela de forma separada cada letra em uma div",
    "url": "./separador/"
}
]

document.addEventListener('DOMContentLoaded',()=>{
    
    for (const atividade of atividades) {
        
        let liElement = document.createElement('li')
        let h2Element = document.createElement('h2')
        let pElement = document.createElement('p')
        let pLinkElement = document.createElement('p')
        let aElement = document.createElement('a')

        h2Element.textContent = atividade.titulo

        pElement.textContent = atividade.descricao

        aElement.href = atividade.url
        aElement.textContent = 'Clique aqui'
        pLinkElement.textContent  = ` para visualizar`

        liElement.classList.add(`listas-atividades`)

        liElement.appendChild(h2Element)
        liElement.appendChild(pElement)
        liElement.appendChild(aElement)
        liElement.appendChild(pLinkElement)

        OlElement.appendChild(liElement)
    }
})