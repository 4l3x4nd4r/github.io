document.getElementById('facebook-login').addEventListener('click', function() {
    alert('Login com Facebook ainda não implementado.');
});

document.getElementById('google-login').addEventListener('click', function() {
    alert('Login com Google ainda não implementado.');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você pode fazer o que quiser com os valores do formulário, como:
    // - Validar os dados
    // - Enviar os dados para um servidor
    // - Exibir uma mensagem ao usuário

    console.log('Email:', email);
    console.log('Senha:', senha);

    // Exemplo de validação simples
    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Login tradicional ainda não implementado, mas os dados foram capturados.');
    }
});
