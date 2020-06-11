function sortear(){

    let ini = document.getElementById('tx1')
    let fin = document.getElementById('tx2')
    let quant = document.getElementById('tx3')
    let res = document.getElementById('res')

    
    
    if (ini.value.length == 0 || fin.value.length == 0 || quant.value.length == 0){
        window.alert('ERRO : está faltando algum número')
    }else{
        let i = Number(ini.value)
        let f = Number(fin.value)
        let q = Number(quant.value)
        if(q == 1){
            res.innerHTML = `O número sorteado é `
            for(let c = 1; c <= q; c++ ){
                resp = Math.floor(Math.random() * f + i)
                res.innerHTML += `<h1> ${resp} </h1>`
            }
        }else{
            
            res.innerHTML = `Os números sorteados são: ` 
            for(let c = 1; c <= q; c++ ){
                resp = Math.floor(Math.random() * f + i)
                res.innerHTML += `<h1> ${resp} </h1> `
            }
            
         }     
        
    }
    
}