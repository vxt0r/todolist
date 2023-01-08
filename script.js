const input = document.querySelector('.input-notas')
const btn = document.querySelector('.btn-add')
const secaoItens = document.querySelector('.itens')


const criarSpan = (acao)=>{
    const span = document.createElement('span')
    span.innerText = acao[0].toUpperCase() + acao.substring(1)
    span.classList.add(acao)
    return span
}

const adicionarSpansItem = (item)=>{
    const editar = criarSpan('editar')
    const remover = criarSpan('remover')
    item.appendChild(editar)
    item.appendChild(remover)
} 

const criarItem = ()=>{
    const p = document.createElement('p')
    p.classList.add('item')
    p.innerText = input.value
    adicionarSpansItem(p)
    secaoItens.appendChild(p)
}

const editarItem = (e)=>{
    const p = e.target.parentNode
    const texto = prompt("Edite a nota")
    p.innerText = texto
    adicionarSpansItem(p)
}

const removerItem = (e)=>{
    const p = e.target.parentNode
    p.remove()
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








