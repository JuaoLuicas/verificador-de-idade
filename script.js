
    var fano = window.document.getElementById('data')
    var data = new Date()
    var ano = data.getFullYear()
    var res = window.document.getElementById('res')
    var sexo = window.document.getElementsByName('radsex')
    var img = window.document.getElementById('foto')
    
function verificar() {
    if (fano.value.length == 0 || fano.value.length == 1 || fano.value.length == 2 || fano.value.length == 3 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else if (fano.value <= 1900) {
        window.alert('[ERRO] Idade impossível de ser alcançada')
    } else {
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade === 1) {
                res.innerHTML = `Detectamos um ${gênero} com ${idade} ano.`
            } else {
                res.innerHTML = `Detectamos um ${gênero} com ${idade} anos.`
            }

            if (idade >= 0 && idade <= 5) {
                // Bebê
                img.src = 'foto-bebe-h.png'}
            else if (idade <= 11) {
                // Criança
                img.src = 'foto-crianca-h.png'}
            else if (idade <= 30) {
                // Jovem
                img.src = 'foto-jovem-h.png'}
            else if (idade <= 55) {
                // Adulto
                img.src = 'foto-adulto-h.png'}
            else {
                // Idoso
                img.src = 'foto-velho-h.png'
            }
            img.style.border = 'black solid 3px'
            img.style.borderRadius = '4px'
        }
        else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade === 1) {
                res.innerHTML = `Detectamos uma ${gênero} com ${idade} ano.`
            } else {
                res.innerHTML = `Detectamos uma ${gênero} com ${idade} anos.`
            }

            if (idade >= 0 && idade <= 5) {
                // Bebê
                img.src = 'foto-bebe-m.png'}
            else if (idade <= 11) {
                // Criança
                img.src = 'foto-crianca-m.png'}
            else if (idade <= 30) {
                // Jovem
                img.src = 'foto-jovem-m.png'}
            else if (idade <= 55) {
                // Adulto
                img.src = 'foto-adulto-m.png'}
            else {
                // Idoso
                img.src = 'foto-velho-m.png'
            }
            img.style.border = 'black solid 3px'
            img.style.borderRadius = '4px'
        }
        else {
            window.alert('[ERRO] Informe o sexo')
        }
    }
}