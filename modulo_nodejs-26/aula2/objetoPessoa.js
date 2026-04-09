class Pessoa {
id;
nome;
cpfCnpj;
senha;
endereco;
ativo;
}

const usuario1 = Pessoa;
usuario1.id = 1;
usuario1.nome = "Tino";
usuario1.cpfCnpj = 020202020202;
usuario1.endereco = "Servidao Pacífico 123"
usuario1.ativo = true;

console.log(usuario1);
