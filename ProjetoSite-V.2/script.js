// Evento para enviar comentários
document.getElementById("form-comentarios")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário (recarregar a página)

    // Obtém os valores dos campos de nome e comentário
    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    // Cria um novo elemento para exibir o comentário
    const novoComentario = document.createElement("div");
    novoComentario.classList.add("comentario");

    // Usando crases para concatenar
    novoComentario.innerHTML = `<strong>${nome}:</strong> <p>${comentario}</p>`;

    // Adiciona o novo comentário à lista de comentários
    document.getElementById("lista-comentarios").appendChild(novoComentario);

    // Limpa os campos do formulário após o envio
    document.getElementById("form-comentarios").reset();
});

// Função para cadastrar usuário e salvar no localStorage
function cadastrarUsuario(nome, senha) {
    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("usuarioSenha", senha);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "telalogin.html"; // Redireciona para a página de login após o cadastro
}

// Valida o login com base nos dados salvos
function validarLogin(nome, senha) {
    const nomeSalvo = localStorage.getItem("usuarioNome");
    const senhaSalva = localStorage.getItem("usuarioSenha");

    if (nome === nomeSalvo && senha === senhaSalva) {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html"; // Redireciona para a página principal
    } else {
        alert("Nome ou senha incorretos. Tente novamente.");
    }
}

// Evento de cadastro (no cadastro.html)
document.getElementById("form-createlogin")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("novo-nome").value;
    const senha = document.getElementById("nova-senha").value;
    cadastrarUsuario(nome, senha);
});

// Evento de login (no login.html)
document.getElementById("form-login")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    validarLogin(nome, senha);
});

// Função para cadastrar usuário e salvar no localStorage
function cadastrarUsuario(nome, email, telefone, endereco, idade, cpf, sexo) {
    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioTelefone", telefone);
    localStorage.setItem("usuarioEndereco", endereco);
    localStorage.setItem("usuarioIdade", idade);
    localStorage.setItem("usuarioCPF", cpf);
    localStorage.setItem("usuarioSexo", sexo);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html"; // Redireciona para a galeria após o cadastro
}

// Evento de cadastro
document.getElementById("form-cadastro")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const idade = document.getElementById("idade").value;
    const cpf = document.getElementById("cpf").value;
    const sexo = document.getElementById("sexo").value;
    cadastrarUsuario(nome, email, telefone, endereco, idade, cpf, sexo);
});

// Evento para enviar comentários
document.getElementById("botao-comentar").addEventListener("click", function() {
    if (!localStorage.getItem("usuarioNome")) {
        document.getElementById("mensagem-comentario").innerText = "Você precisa se cadastrar antes de comentar.";
        window.location.href = "telacadastro.html"; // Redireciona para a página de cadastro
    } else {
        // Aqui você pode implementar a lógica para adicionar o comentário
        // Por enquanto, vamos apenas mostrar uma mensagem.
        alert("Seu comentário será enviado!");
    }
});

