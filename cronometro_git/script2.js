function tempo(){
    var t = new Date()
    var div_tempo = document.getElementById('div_tempo')
    var segundos = t.getSeconds()
    var minutos = t.getMinutes()
    var horas = t.getHours()
    if (String(segundos).length == 1){
        segundos = '0'+segundos
    }
    if (String(minutos).length == 1){
        minutos = '0'+minutos
    }
    if (String(horas).length == 1){
        horas = '0'+horas
    }
    var hora = `Horário atual: ${horas}:${minutos}:${segundos}`
    div_tempo.innerHTML = hora
    setTimeout("tempo()",1000)
}

function data(){
    var d = new Date()
    var d_semana = diaDaSemana(d.getDay())
    var dia = d.getDate()
    var mes = d.getMonth() + 1
    if (String(dia).length == 1){
        dia = '0'+dia
    }
    if (String(mes).length == 1){
        mes = '0'+ mes
    }
    var div_data = document.getElementById('div_data')
    div_data.innerHTML = `Data atual: ${d_semana} ${dia}/${mes}/${d.getFullYear()}`
}

function diaDaSemana(d_semana){
    switch(d_semana){
        case 0:
            d_semana = 'Domingo'
            break
        case 1:
            d_semana = 'Segunda-feira'
            break
        case 2:
            d_semana = 'Terça-feira'
            break
        case 3:
            d_semana = 'Quarta-feira'
            break
        case 4:
            d_semana = 'Quinta-feira'
            break
        case 5:
            d_semana = 'Sexta-feira'
            break
        case 6:
            d_semana = 'Sábado'
            break
    }
    return d_semana
}


function tempo1(){
    var id_cron = document.getElementById('id_cron')
    var botao_parar = document.getElementById('botao_parar')
    if(document.getElementById('div_data').value==undefined){
        document.getElementById('div_data').value = [0,0,0,0]
        document.getElementById('botao_parar').value = false
    }
    if(botao_parar.value == false){
        var t = new Date
        var t_atual = Number(t.getMilliseconds())
        var t_antigo = document.getElementById('div_data').value[0]
        var result = tempo2(t_atual,t_antigo)
        var resultstr = []
        var aux
        aux = '00'+result[0]
        resultstr[0] = aux.slice(-3)
        aux = '0'+result[1]
        resultstr[1] = aux.slice(-2)
        aux = '0'+result[2]
        resultstr[2] = aux.slice(-2)
        id_cron.innerHTML = `${result[3]}:${resultstr[2]}:${resultstr[1]}:${resultstr[0]}`
    }
    else{
        result = document.getElementById('div_data').value
        var resultstr = []
        var aux
        aux = '00'+result[0]
        resultstr[0] = aux.slice(-3)
        aux = '0'+result[1]
        resultstr[1] = aux.slice(-2)
        aux = '0'+result[2]
        resultstr[2] = aux.slice(-2)
        id_cron.innerHTML = `${result[3]}:${resultstr[2]}:${resultstr[1]}:${resultstr[0]}`
    }
        setTimeout("tempo1()",1)
}

function tempo2(t_atual,t_antigo){
    var result = document.getElementById('div_data').value

    if(t_atual<t_antigo){
        result[1] += 1
    }
    if(result[1] == 60){
        result[1] = 0
        result[2] += 1
    }
    if(result[2] == 60){
        result[2] = 0
        result[3] += 1
    }
    result[0] = t_atual
    
    document.getElementById('div_data').value = result
    return result
}



function comecar(){
    var id_cron = document.getElementById('id_cron')
    id_cron.innerHTML = `0:00:00:000`
    document.getElementById('div_data').value = [0,0,0,0]
    document.getElementById('botao_parar').value = false
    document.getElementById('botao_parar').value = false
    tempo1()
}
function parar(){
    document.getElementById('botao_parar').value = true
}

function recomecar(){
    document.getElementById('botao_parar').value = false
    tempo1()
}

function resetar(){
    var id_cron = document.getElementById('id_cron')
    id_cron.innerHTML = `0:00:00:000`
    document.getElementById('div_data').value = [0,0,0,0]
    document.getElementById('botao_parar').value = false
    parar()
}