const pessoa = {
    nome: "Carlos",
    idade: "30",
    profissao: "Engenheiro"
};

function exibirinformacoes(pessoa){
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade  }`);
    console.log(`Profissao: ${pessoa.profissao}`);
}

function atualizarIdade(pessoa, novaIdade){
    pessoa.idade = novaIdade
}

console.log("Informações da Pessoa: ");
exibirinformacoes(pessoa);

atualizarIdade(pessoa, 31);

console.log("\nInformações da Pessoa após atualização: ");
exibirinformacoes(pessoa);
