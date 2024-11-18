let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true;
    } else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //Colocando o valor dentro da array.
        valores.push(Number(num.value));

        //Valor dentro do select
        let item = document.createElement('option')
        item.text = ` Numero ${num.value} adicionado.`
        lista.appendChild(item)  
        res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / tot

    res.innerHTML = ''
    res.innerHTML += ` <p>Ao todo, tenho ${tot} números cadastrados.</p>`
    res.innerHTML += ` <p>O maior número informado foi ${maior}.</p>`
    res.innerHTML += ` <p>O menor número informado foi ${menor}.</p>`
    res.innerHTML += ` <p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += ` <p>A média dos valores digitados é: ${media}.</p>`
}
