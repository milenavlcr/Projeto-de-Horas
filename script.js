function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minute = data.getMinutes()
// *var seconds = data.getSeconds()* Caso queira que apareça os segundos
msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos` // *${seconds} segundos.` Caso queira que apareça os segundos
if(hora >= 5 && hora < 12) {
// Bom dia!
 img.src = 'manhã.png'
 document.body.style.background = '#FE8D00'
} else if (hora >= 12 && hora <= 18) {
    img.src = 'tarde.png'
    // Boa tarde!
    document.body.style.background = '#F1C9AD'
} else if (hora >= 18 && hora <= 23) { 
    // Boa noite!
    img.src = 'noite.png'
    document.body.style.background = '#293535'
}



}