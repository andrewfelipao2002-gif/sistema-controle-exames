// Pega o formulário e os elementos da tela de login pelo id
const formLogin = document.getElementById("form-login");
const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagem-erro");

// Executa quando o usuário clica em "Entrar"
formLogin.addEventListener("submit", function (evento) {

    // Impede a página de recarregar sozinha ao enviar o formulário
    evento.preventDefault();

    // Lê o que foi digitado (trim remove espaços no começo e no fim)
    const usuario = campoUsuario.value.trim();
    const senha = campoSenha.value.trim();

    // Validação 1: usuário vazio
    if (usuario === "") {
        mensagemErro.textContent = "Digite o seu usuário.";
        campoUsuario.focus(); // coloca o cursor no campo com problema
        return;               // para aqui e não continua
    }

    // Validação 2: senha vazia
    if (senha === "") {
        mensagemErro.textContent = "Digite a sua senha.";
        campoSenha.focus();
        return;
    }

    // Validação 3: senha muito curta
    if (senha.length < 4) {
        mensagemErro.textContent = "A senha deve ter pelo menos 4 caracteres.";
        campoSenha.focus();
        return;
    }

    // Tudo certo: limpa o erro e vai para a tela principal
    mensagemErro.textContent = "";
    window.location.href = "principal.html";
});