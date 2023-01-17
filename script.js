const input = document.querySelector('.input-notas')
const btn = document.querySelector('.btn-add')
const secaoItens = document.querySelector('.itens')

let listaTarefas = []

const printarItensSalvos = ()=>{
    listaTarefas.forEach(item =>{
        secaoItens.innerHTML +=`
        <div class='item'>
            <span class='texto-span'>${item}</span>
            <span class='editar'>Editar</span>
            <span class='remover'>Remover</span>
        </div>
        `
    })
} 

const carregarDados = ()=>{
    for(let i = 0; i <=7; i++){
        let item = localStorage.getItem(i)
    
        if(item){
            listaTarefas.push(item)
        }
    }
    printarItensSalvos()
}

carregarDados()

const ajustarIndexItens = ()=>{
    const totalItens = listaTarefas.length
    for(let i = 0; i <= totalItens; i++){
        localStorage.removeItem(i)
    }
    listaTarefas.forEach((item)=>{
        let index = listaTarefas.indexOf(item)
        localStorage.setItem(index,item)
    })
}

const removerItemSalvo = (div)=>{
    const item = div.children[0].innerText
    
    for(let tarefa of listaTarefas){
        if(tarefa === item){
            const index = listaTarefas.indexOf(tarefa)
            localStorage.removeItem(index)
            listaTarefas.splice(index,1)
            ajustarIndexItens()
        }
    }
}


const salvarItem = (div)=>{
    const item = div.children[0].innerText
    listaTarefas.push(item)
    const index = listaTarefas.indexOf(item)
    localStorage.setItem(index,item)
}

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
    salvarItem(div)
    input.value = ""
    
}

const editarItem = (e)=>{
    const spanTexto = e.target.parentNode.children[0]
    const item = spanTexto.innerText
    let index

    for(let tarefa of listaTarefas){
        if(tarefa === item){
            index = listaTarefas.indexOf(tarefa)
        }
    }

    const texto = prompt("Edite a nota")
    
    if(texto){
        spanTexto.innerText = texto
        localStorage.setItem(index,texto)
    }
}

const removerItem = (e)=>{
    const div = e.target.parentNode
    div.remove()
    removerItemSalvo(div)
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








