constnumeroSenha=document.querySelector('.parametro-senha_texto')
letamanhoSenha=12;
numeroSenha.textConentent=tamanhoSenha;
constletrasMaiusculas='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
constletrasMaiusculas='abcdefghijklmnopqrtuvwxyz';
constnumeros='0123456789';
constsimbolos='!@%*?';
contbotoes=document.querySelectorAll('.parametro-senha_botao');
constcampoSenha=document.querySelector('#campo-senha');
constcheckbox=ocument.querySelectorAll('.checkbox');
constfocaSenha=document.querySelector('forca');


botoes[0].onclick=diminuiTamanho;
botoes[1].onclick=aumentaTamanho;

functioniminuiTamanho(){
    if(tamanhoSenha>1){
     //tamanhoSenha=tamanhoSenha-1;
     tamanhoSenha--;

    }

    numeroSenha.textConentent=tamanhoSenha;
    geraSenha();

    }

    functionaumentaTamanho()}

