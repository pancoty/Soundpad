const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idAudio){
    const elemento = document.querySelector(idAudio);
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Inválido/ Não encontrado');
    }
}

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {
        if(evento.code ==='space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
