let amigo = {nome: 'josé',
sexo:'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso+=p
}}
amigo.engordar(50)
console.log((amigo))