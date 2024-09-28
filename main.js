const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const simbolos = 'l@%*?';
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

let alfabeto = "";
let senha = "";

function geraSenha() {
    alfabeto = "";
    if (checkbox[0].checked) {
        alfabeto += letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto += letrasMaiusculas;
    }
    if (checkbox[2].checked) {
        alfabeto += letrasMinusculas;
    }
    if (checkbox[3].checked) {
        alfabeto += simbolos;
    }
    senha = "";
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha();
}

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function classificaSenha() {
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (tamanhoSenha > 11) {
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5) {
        forcaSenha.classList.add('fraca');
    }
}
