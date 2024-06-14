// Criando uma função para registrar um novo usuário
function registrarUsuario(event) {

  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Puxando os dados do formulário
  var nome = document.getElementById('name').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var cidade = document.getElementById('cidade').value;

  // Mostrando os dados no console
  console.log('Nome:', nome, '\nSobrenome:', sobrenome, '\nCidade:', cidade);

  // Puxando a base de dados
  var mysql = require('mysql2');

  // Criando a conexão com o MySQL
  var conexao = mysql.createConnection({

    // logando no MySQL
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'electron'
  });

  // Verificando se a conexão teve erros
  conexao.connect(function (error) {
    if (error) {
      // Se houve erros de code 
      console.log(error.code);

      // Se houve erros de fatal  
      console.log(error.fatal);
    };
  });

  // Inserindo os dados do formulário no MySQL
  var query = `INSERT INTO pessoa (nome, sobrenome, cidade) VALUES ("${nome}","${sobrenome}","${cidade}")`;

  // Executando a query no MySQL
  conexao.query(query, function (error) {

    // Verificando se houve erros ao registrar o usuário
    if (error) {
      console.log("Erro ao registrar o usuário:", error);
    } else {
      console.log("Usuário registrado com sucesso!");
    };
  });

}

// Puxando o formulário e adicionando um evento de submit do botão
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', registrarUsuario);

