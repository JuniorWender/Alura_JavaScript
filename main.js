function TocaSom(seletorDeAudio) {
    const element = document.querySelector(seletorDeAudio);

    if(element && element.localName === 'audio'){ // Colocar o elemento sozinho significa comparar ele != null
        element.play();
    }
    else{
        alert('Instrumento Não Encontrado');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0 ;contador < ListaDeTeclas.length; contador ++){

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // Template String

    tecla.onclick = function(){
        TocaSom(idAudio);
    };

    tecla.onkeydown = function(event){
        if(event.Code == 'Space' || event.Code == 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(event){
        if(event.Code == 'Space' || event.Code == 'Enter'){
            tecla.classList.remove('ativa');
        }
    }

}
