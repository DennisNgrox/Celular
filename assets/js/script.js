var botao = document.getElementById('apertar');
botao.onclick = ()=>{
    var telaX = document.getElementById('telaX');
    /* Senha */
    var telaY = document.getElementById('telaY');
    /* Tela Inicial */
    var telaZ = document.getElementById('telaZ');
    /* Configurações */
    var telaW = document.getElementById('telaW');
    /* WhatsApp */
    var telaT = document.getElementById('telaT');
    /* Music */
    var telaA = document.getElementById('telaA');
    /* Contatos */
    var prim = document.getElementById('primeiroText');
    var segu = document.getElementById('segundoText');
    var terc = document.getElementById('terceiroText');
    var tela8 = document.getElementById('tela8');
    /* Menu */
    var tela9 = document.getElementById('tela9');
    /*Chat*/

    if (tela9.style.display === 'block') {
        tela9.style.display = 'none';
        telaY.style.display = 'block';
    } else if (telaA.style.display === 'block') {
        tela9.style.display = 'none';
        tela8.style.display = 'none';
        telaT.style.display = 'none';
        telaW.style.display = 'none';
        telaX.style.display = 'none';
        telaY.style.display = 'block';
        telaZ.style.display = 'none'
        telaA.style.display = 'none';
    } else if (telaT.style.display === 'block') {
        tela9.style.display = 'none';
        tela8.style.display = 'none';
        telaT.style.display = 'none';
        telaW.style.display = 'none';
        telaX.style.display = 'none';
        telaY.style.display = 'block';
        telaZ.style.display = 'none'
        telaA.style.display = 'none';
    } else if (telaW.style.display === 'block') {
        tela9.style.display = 'none';
        tela8.style.display = 'none';
        telaW.style.display = 'none';
        telaX.style.display = 'none';
        telaY.style.display = 'block';
        telaZ.style.display = 'none'
        telaA.style.display = 'none';
    } else if (telaZ.style.display === 'block') {
        tela9.style.display = 'none';
        tela8.style.display = 'none';
        telaX.style.display = 'none';
        telaY.style.display = 'block';
        telaZ.style.display = 'none';
        telaA.style.display = 'none';
    } else if (telaX.style.display === 'none') {
        tela9.style.display = 'none';
        tela8.style.display = 'none';
        telaX.style.display = 'block';
        prim.style.display = 'none';
        segu.style.display = 'block'
        terc.style.display = 'none';
        telaY.style.display = 'none';
        telaZ.style.display = 'none';
        telaA.style.display = 'none';
    } else {
        tela9.style.display = 'none';
        telaX.style.display = 'none';
        segu.style.display = 'none'
        terc.style.display = 'none';
        prim.style.display = 'block';
        telaA.style.display = 'none';
        tela8.style.display = 'none';
    }

}

var senha = document.getElementById('senha');

var num = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "zero", "cancelar", "apagar"];

num[0] = document.getElementById('um');
var um = num[0];
um.onclick = ()=>{
    senha.value += '1';
}
;

num[1] = document.getElementById('dois');
var um = num[1];
um.onclick = ()=>{
    senha.value += '2';
}
;

num[2] = document.getElementById('tres');
var um = num[2];
um.onclick = ()=>{
    senha.value += '3';
}
;

num[3] = document.getElementById('quatro');
var um = num[3];
um.onclick = ()=>{
    senha.value += '4';
}
;

num[4] = document.getElementById('cinco');
var um = num[4];
um.onclick = ()=>{
    senha.value += '5';
}
;

num[5] = document.getElementById('seis');
var um = num[5];
um.onclick = ()=>{
    senha.value += '6';
}
;

num[6] = document.getElementById('sete');
var um = num[6];
um.onclick = ()=>{
    senha.value += '7';
}
;

num[7] = document.getElementById('oito');
var um = num[7];
um.onclick = ()=>{
    senha.value += '8';
}
;

num[8] = document.getElementById('nove');
var um = num[8];
um.onclick = ()=>{
    senha.value += '9';
}
;

num[9] = document.getElementById('zero');
var um = num[9];
um.onclick = ()=>{
    senha.value += '0';
}
;

num[10] = document.getElementById('cancel');
var um = num[10];
um.onclick = ()=>{
    document.getElementById('senha').value = '';
}
;

setInterval(desbloquear, 500);

function desbloquear() {
    let senha = document.getElementById("senha").value;
    var segu = document.getElementById('segundoText');
    var terc = document.getElementById('terceiroText');

    if (senha.length == 6) {
        if (senha == "943321") {
            document.getElementById('telaY').style.display = 'block';
            segu.style.display = 'none';
            terc.style.display = 'block';
            document.getElementById('telaX').style.display = 'none';
            document.getElementById("senha").value = "";
        } else {
            alert('incorreto');
            document.getElementById("senha").value = "";
        }
    }
}

var tela9 = document.getElementById('tela9');

chat.onclick = ()=>{
    if (tela9.style.display === 'none') {
        tela9.style.display = 'block';
        document.getElementById('telaY').style.display = 'none';
    }
}

var configuration = document.getElementById('configuration');
configuration.onclick = ()=>{
    var telaZ = document.getElementById('telaZ');

    if (telaZ.style.display === 'none') {
        telaZ.style.display = 'block';
        document.getElementById('telaY').style.display = 'none';
    }
}

var whatsapp = document.getElementById('whatsapp');

whatsapp.onclick = ()=>{
    var telaW = document.getElementById('telaW');
    if (telaW.style.display === 'none') {
        telaW.style.display = 'block';
        telaY.style.display = 'none';
    }
}

var music = document.getElementById('music');
music.onclick = ()=>{
    var telaT = document.getElementById('telaT');
    if (telaT.style.display === 'none') {
        telaT.style.display = 'block';
        telaY.style.display = 'none';
    }
}

var play = document.getElementById('play');
play.addEventListener("click", function() {
    var musica = document.getElementById('musica1');
    var musicadois = document.getElementById('musica2');
    var imagemUm = document.getElementById('oneMusic');
    var imagemDois = document.getElementById('secondMusic');

    if ((musica.paused) && (imagemUm.style.display === 'block')) {
        musica.play();
        document.getElementById('played').style.display = 'none';
        document.getElementById('paused').style.display = 'block'
        musicadois.pause();
    } else if ((musica.play) && (musicadois.paused) && (imagemUm.style.display === 'block')) {
        musica.pause();
        musicadois.pause();
        document.getElementById('played').style.display = 'block';
        document.getElementById('paused').style.display = 'none';
    } else if ((musicadois.paused) && (musica.paused) && (imagemDois.style.display === 'block')) {
        musicadois.play();
        document.getElementById('played').style.display = 'none';
        document.getElementById('paused').style.display = 'block';
    } else if ((musica.paused) && (musicadois.play) && (imagemDois.style.display === 'block')) {
        musicadois.pause();
        document.getElementById('played').style.display = 'block';
        document.getElementById('paused').style.display = 'none';
    }

});

var next = document.getElementById('avancar');
next.addEventListener("click", function() {
    var musica = document.getElementById('musica1');
    var musicadois = document.getElementById('musica2');
    var imagemUm = document.getElementById('oneMusic');
    var imagemDois = document.getElementById('secondMusic');
    if (musicadois.paused) {
        document.getElementById('played').style.display = 'block';
        document.getElementById('paused').style.display = 'none';
        imagemUm.style.display = 'none';
        imagemDois.style.display = 'block';
        musicadois;
        musica.pause();

    }
});

var retroceder = document.getElementById('retroceder');
retroceder.addEventListener("click", function() {
    var musica = document.getElementById('musica1');
    var musicadois = document.getElementById('musica2');
    var imagemUm = document.getElementById('oneMusic');
    var imagemDois = document.getElementById('secondMusic');
    if (musica.paused) {
        imagemUm.style.display = 'block';
        imagemDois.style.display = 'none';
        musica;
        musicadois.pause();
        document.getElementById('played').style.display = 'block';
        document.getElementById('paused').style.display = 'none';
    }
});

var div = document.getElementById('log');
var texto = 'Meu nome é Dennis, sou o desenvolvedor desse pequeno projeto.';

function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length)
            return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
    }, 90);
}

escrever(texto, div);

var telefonar = document.getElementById('telinhadedigitacao');

var num1 = ["numeroum", "numerodois", "numerotres", "numeroquatro", "numerocinco", "numeroseis", "numerosete", "numeroito", "numeronove", "numerozero", "asteristico", "jogodavelha", "ligar"];

num1[0] = document.getElementById('numeroum');
var numeroum = num1[0];
numeroum.onclick = ()=>{
    telefonar.value += '1';
}
;

num1[1] = document.getElementById('numerodois');
var numeroum = num1[1];
numeroum.onclick = ()=>{
    telefonar.value += '2';
}
;

num1[2] = document.getElementById('numerotres');
var numeroum = num1[2];
numeroum.onclick = ()=>{
    telefonar.value += '3';
}
;

num1[3] = document.getElementById('numeroquatro');
var numeroum = num1[3];
numeroum.onclick = ()=>{
    telefonar.value += '4';
}
;

num1[4] = document.getElementById('numerocinco');
var numeroum = num1[4];
numeroum.onclick = ()=>{
    telefonar.value += '5';
}
;

num1[5] = document.getElementById('numeroseis');
var numeroum = num1[5];
numeroum.onclick = ()=>{
    telefonar.value += '6';
}
;

num1[6] = document.getElementById('numerosete');
var numeroum = num1[6];
um.onclick = ()=>{
    telefonar.value += '7';
}
;

num1[7] = document.getElementById('numerooito');
var numeroum = num1[7];
numeroum.onclick = ()=>{
    telefonar.value += '8';
}
;

num1[8] = document.getElementById('numeronove');
var numeroum = num1[8];
numeroum.onclick = ()=>{
    telefonar.value += '9';
}
;

num1[9] = document.getElementById('numerozero');
var numeroum = num1[9];
numeroum.onclick = ()=>{
    telefonar.value += '0';
}
;

num1[10] = document.getElementById('asteristico');
var numeroum = num1[10];
numeroum.onclick = ()=>{
    document.getElementById('telinhadedigitacao').value = '';
}
;

num1[10] = document.getElementById('apagando');
var numeroum = num1[10];
numeroum.onclick = ()=>{
    var pass = document.getElementById('telinhadedigitacao').value;
    document.getElementById('telinhadedigitacao').value = pass.substring(0, pass.length - 1);
}
;

num1[10] = document.getElementById('ligar');
var numeroum = num1[10];
numeroum.onclick = ()=>{
    document.getElementById('telinhadedigitacao').value='Error';
}
;

var contatos = document.getElementById('telephone');
var telaA = document.getElementById('telaA');
var telaY = document.getElementById('telaY');
contatos.onclick = ()=>{
    if (telaA.style.display === 'none') {
        telaA.style.display = 'block';
        telaY.style.display = 'none';
    } else {
        telaA.style.display = 'none';

    }
}

var subirTela = document.getElementById('horas');
var tela = document.getElementById('tela8');
var telaY = document.getElementById('telaY');
var telaX = document.getElementById('telaX');

subirTela.addEventListener("click", function() {
    if (tela.style.display === 'none') {
        tela.style.display = 'block';
        telaY.style.display = 'none';

        document.getElementById('desaparecerTela').style.display = 'block';
        document.getElementById('desaparecer').style.display = 'none';
    }
});

var abaixarTela = document.getElementById('desaparecerTela');
var telaY = document.getElementById('telaY');
var telaT = document.getElementById('telaT');

abaixarTela.addEventListener("click", function() {
    if (tela.style.display === 'block') {
        tela.style.display = 'none';
        telaY.style.display = 'block';
    }
});

var subir = document.getElementById('menuMusic');
var tela = document.getElementById('tela8');
var telaT = document.getElementById('telaT');

subir.addEventListener("click", function() {
    if (tela.style.display === 'none') {
        tela.style.display = 'block';
        telaT.style.display = 'none';

        document.getElementById('desaparecerTela').style.display = 'none';
        document.getElementById('desaparecer').style.display = 'block';

    }
});

var abaixar = document.getElementById('desaparecer');
var telaT = document.getElementById('telaT');

abaixar.addEventListener("click", function() {
    if (tela.style.display === 'block') {
        tela.style.display = 'none';
        telaT.style.display = 'block';

    }
});

var brilho = document.getElementById('brilho');
var tela = document.getElementById('tela8');
var telaX = document.getElementById('telaX');
/* Senha */
var telaY = document.getElementById('telaY');
/* Tela Inicial */
var telaZ = document.getElementById('telaZ');
/* Configurações */
var telaW = document.getElementById('telaW');
/* WhatsApp */
var telaT = document.getElementById('telaT');
/* Music */
var telaA = document.getElementById('telaA');
/* Contatos */

brilho.addEventListener("click", function() {

    tela.classList.toggle('mylist');
    telaX.classList.toggle('mylist');
    telaY.classList.toggle('mylist');
    telaZ.classList.toggle('mylist');
    telaW.classList.toggle('mylist');
    telaT.classList.toggle('mylist');
    telaA.classList.toggle('mylist');

    if (brilho.style.backgroundColor === '') {
        brilho.style.backgroundColor = 'black';
    } else {
        brilho.style.backgroundColor = ''
    }
});

var musica = document.getElementById('musica1');
var musicadois = document.getElementById('musica2');
var volumeMais = document.getElementById('mais');
var volumeMenos = document.getElementById('menos');

volumeMais.addEventListener("click", function() {
    if (musica.volume < 1) {
        musica.volume += 0.1;
    }
    if (musicadois.volume < 1) {
        musicadois.volume += 0.1;
    }
});

volumeMenos.addEventListener("click", function() {
    if (musica.volume > 0) {
        musica.volume -= 0.1;
    }
    if (musicadois.volume > 0) {
        musicadois.volume -= 0.1;
    }
});

var usuario = document.getElementById('userEscrita');
var enviar = document.getElementById('enviar');

/*document.addEventListener("keypress", (e) => {
    if(e.key === 'Enter') {
   
        var usUser = document.getElementById('conversas');
        var usuarioChat = document.createElement('div');
        usuarioChat.classList.add('usuario');
        usUser.appendChild(usuarioChat);

        var conversaUsuario = document.createElement('div');
        conversaUsuario.classList.add('balaoUser');
        usuarioChat.appendChild(conversaUsuario);

        var textoUsuario = document.createElement('p');
        textoUsuario.classList.add('imprimirTexto');
        conversaUsuario.appendChild(textoUsuario);

        textoUsuario.innerHTML = usuario.value;

        usuario.value = '';

        
        if(textoUsuario.innerHTML === '1' || textoUsuario.innerHTML === 'Sim' || textoUsuario.innerHTML === 'sim') {
            setTimeout(function (){

          
            var botUser = document.getElementById('conversas');
            var botPrim = document.createElement('div');
            botPrim.classList.add('botPrim');
            botUser.appendChild(botPrim);

            var bot = document.createElement('div');
            bot.classList.add('balaoRobo');
            botPrim.appendChild(bot);

            var textoBot = document.createElement('p');
            textoBot.classList.add('#one');
            bot.appendChild(textoBot);

            textoBot.innerHTML = 'Pois bem, então vamos conversar!';
        }, 1500);
      }
    }
    }); */

var usuario = document.getElementById('userEscrita');
var enviar = document.getElementById('enviar');
var form = document.getElementById('form');
/* enviar.addEventListener("click", () => { */

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (usuario.value === '') {
        alert('Campo Vazio, por favor, escolha uma das opções utilizando os números de 1 á 7. :D');
    } else {
        var usUser = document.getElementById('coversaEbotUser');
        var usuarioChat = document.createElement('div');
        var conversaUsuario = document.createElement('div');
        var textoUsuario = document.createElement('p');

        usuarioChat.classList.add('usuario');
        conversaUsuario.classList.add('balaoUser');
        textoUsuario.classList.add('imprimirTexto');

        usUser.appendChild(usuarioChat);
        usuarioChat.appendChild(conversaUsuario);
        conversaUsuario.appendChild(textoUsuario);

        textoUsuario.innerHTML = usuario.value;

        usuario.value = '';
    }

    switch (textoUsuario.innerHTML) {
    case '1':
        setTimeout(function() {
            var botUser = document.getElementById('coversaEbotUser');
            var primBot = document.createElement('div');
            var usBot = document.createElement('div');
            var pbot = document.createElement('p');

            primBot.classList.add('bollon');

            botUser.appendChild(primBot);
            primBot.appendChild(usBot);
            usBot.appendChild(pbot);

            pbot.innerHTML = 'A senha é composta por 6 caracteres, sendo ela "943321", foi criado um sistema de verificação que não necessita de botão para ativar a verificação, se errar a senha tem como apagar ela toda ou apenas partes dela e se mesmo assim prosseguir no erro de senha, uma mensagem será exibida. <br><br>';
        }, 1200);
        break;

    case '2':
        setTimeout(function() {
            var botUser = document.getElementById('coversaEbotUser');
            var primBot = document.createElement('div');
            var usBot = document.createElement('div');
            var pbot = document.createElement('p');

            primBot.classList.add('bollon');

            botUser.appendChild(primBot);
            primBot.appendChild(usBot);
            usBot.appendChild(pbot);

            pbot.innerHTML = 'A tela de configuração se trata apenas de uma interface que mostra as opções do Celular Web, espero mais para frente desenvolver toda essa parte!<br><br>';

        }, 1200);
        break;

    case '3':
        setTimeout(function() {
            var botUser = document.getElementById('coversaEbotUser');
            var primBot = document.createElement('div');
            var usBot = document.createElement('div');
            var pbot = document.createElement('p');

            primBot.classList.add('bollon');

            botUser.appendChild(primBot);
            primBot.appendChild(usBot);
            usBot.appendChild(pbot);

            pbot.innerHTML = 'Na aba de Músicas você poderá dar play, pause, avançar e retroceder, além disso pode puxar a tela de opções para diminuir ou aumentar o volume da música!<br><br>';

        }, 1200);
        break;

    case '4':
        setTimeout(function() {
            var botUser = document.getElementById('coversaEbotUser');
            var primBot = document.createElement('div');
            var usBot = document.createElement('div');
            var pbot = document.createElement('p');

            primBot.classList.add('bollon');

            botUser.appendChild(primBot);
            primBot.appendChild(usBot);
            usBot.appendChild(pbot);

            pbot.innerHTML = 'O chat bot é um desenvolvimento pessoal que logo será mais aperfeiçoado. Escreva o número da sua opção (Ex: 1) e o bot responderá. para apagar é somente selecionar a opção 8!<br><br>';

        }, 1200);
        break;

    case '5':
        setTimeout(function() {
            var botUser = document.getElementById('coversaEbotUser');
            var primBot = document.createElement('div');
            var usBot = document.createElement('div');
            var pbot = document.createElement('p');

            primBot.classList.add('bollon');

            botUser.appendChild(primBot);
            primBot.appendChild(usBot);
            usBot.appendChild(pbot);

            pbot.innerHTML = 'O Whatsapp é uma outra opção que está sendo desenvolvida, no momento está disponível apenas a interface!<br><br>';

        }, 1200);
        break;
    case '6':
        setTimeout(function() {
            var botUser = document.getElementById('coversaEbotUser');
            var primBot = document.createElement('div');
            var usBot = document.createElement('div');
            var pbot = document.createElement('p');

            primBot.classList.add('bollon');

            botUser.appendChild(primBot);
            primBot.appendChild(usBot);
            usBot.appendChild(pbot);

            pbot.innerHTML = 'Existem telas nesse projeto que é possivel rolar para baixo para ver mais informações, seja com o mouse (computador), dedo (celular). Fique atento para não deixar passar informações rsrs!<br><br>';

        }, 1200);
        break;

    case '7':
        setTimeout(function() {
            var botUser = document.getElementById('coversaEbotUser');
            var primBot = document.createElement('div');
            var usBot = document.createElement('div');
            var pbot = document.createElement('p');

            primBot.classList.add('bollon');

            botUser.appendChild(primBot);
            primBot.appendChild(usBot);
            usBot.appendChild(pbot);

            pbot.innerHTML = 'A tela de ligação é apenas uma interface aonde é possível escrever e apagar números, espero desenvolver mais para frente!<br><br>';

        }, 1200);
        break;

    case '8':
        var limpar = document.getElementById('coversaEbotUser');

        while (limpar.hasChildNodes()) {
            limpar.removeChild(limpar.firstChild);
        }
    }
}
);

num[11] = document.getElementById('clear');
var um = num[11];
um.onclick = ()=>{
    var pass = document.getElementById('senha').value;
    document.getElementById('senha').value = pass.substring(0, pass.length - 1);
};



