const input = document.querySelector('.input-notas')
const btn = document.querySelector('.btn-add')
const secaoItens = document.querySelector('.itens')


const criarSpanAcao = (acao)=>{
    const span = document.createElement('span')
    span.innerText = acao[0].toUpperCase() + acao.substring(1)
    span.classList.add(acao)
    return span
}

const criarSpanTexto = ()=>{
    const spanTexto = document.createElement('span')
    spanTexto.classList.add('texto-span')
    spanTexto.innerText = input.value
    return spanTexto
}

const adicionarSpansItem = (div)=>{
    const spanTexto = criarSpanTexto()
    const editar = criarSpanAcao('editar')
    const remover = criarSpanAcao('remover')
    div.appendChild(spanTexto)
    div.appendChild(editar)
    div.appendChild(remover)
} 

const criarItem = ()=>{
    const div = document.createElement('div')
    div.classList.add('item')
    adicionarSpansItem(div)
    secaoItens.appendChild(div)
}

const editarItem = (e)=>{
    const spanTexto = e.target.parentNode.children[0]
    const texto = prompt("Edite a nota")
    if(texto){
        spanTexto.innerText = texto
    }
}

const removerItem = (e)=>{
    const div = e.target.parentNode
    div.remove()
}

const executarAcaoSpan = (e)=>{
    const acao = e.target.innerText
    if(acao === "Editar"){
        editarItem(e)
    }
    else if(acao === "Remover" ){
        removerItem(e)
    }
}

btn.addEventListener('click',criarItem)
secaoItens.addEventListener('click',executarAcaoSpan)








