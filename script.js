document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita o envio do formulário e recarregamento da página
  
      // Pegando os valores dos campos do formulário
      const nome = document.getElementById("nome").value;
      const idade = document.getElementById("idade").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("msg").value;
  
      // Armazenando os dados
      const dadosUsuario = {
        nome: nome,
        idade: idade,
        email: email,
        mensagem: mensagem,
      };
  
      // Exibindo os dados no console
      console.log("Dados do usuário:", dadosUsuario);
  
      // Exibindo os dados na tela
      alert(`Nome: ${nome}\nIdade: ${idade}\nEmail: ${email}\nMensagem: ${mensagem}`);
    });
  });
  