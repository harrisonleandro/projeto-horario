function carregar(){
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours(),toString(),padStart(2, '0')
    var min = data.getMinutes(),toString(),padStart(2, '0')
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 4 && hora < 12){
        // Cor: #D9BD89
        img.src = 'imagens/manha.png'
        document.body.style.background = '#D9BD89'
    } else if (hora >= 12 && hora < 18) {
        //Cor: #EF933B
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Cor: #5B466B
        img.src = 'imagens/noite.png'
        document.body.style.background = '#5B466B'
    }
}
function checkTimeAndRefresh() {
            const now = new Date();
            const seconds = now.getSeconds();

            // Atualiza a página no início de cada minuto (quando os segundos são 0)
            if (seconds === 0) {
                window.location.reload();
            }
        }

        // Verifica a cada segundo
        setInterval(checkTimeAndRefresh, 1000);
