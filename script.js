function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fAno = document.querySelector('input#txtano')
   var res = document.querySelector('div#res')
   if (fAno.value.length == 0 || Number(fAno.value) > ano) {
       alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       var genero = ''
       var img = document.querySelector('img#imagem')

        if (fsex[0].checked){
           genero = 'Homem'
           if (idade >= 0  && idade < 10){
                img.setAttribute('src', './imagens/bebe-homem.jpg')
           } else if (idade < 21){
                img.setAttribute('src', './imagens/adolescente-homem.jpg')
           } else if (idade < 60){
                img.setAttribute('src', './imagens/homem-adulto.jpg')
           } else {
                img.setAttribute('src', './imagens/homem-velho.jpg')
           } 

       } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0  && idade < 10){
                img.setAttribute('src', './imagens/bebe-mulher.jpg')  
            } else if (idade < 21){
                img.setAttribute('src', './imagens/adolescente-mulher.jpg')
            } else if (idade < 60){
                img.setAttribute('src', './imagens/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', './imagens/mulher-velha.jpg')
            } 
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}