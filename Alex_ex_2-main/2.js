const pessoa ={
    nome:"Renan",
    Idade: 40,
    profissao:"Agiota",
};

console.log("Nome:", pessoa.nome)
console.log("Idade:", pessoa["Idade"])
console.log("Proissão:", pessoa.profissao)

pessoa.descrever = function(){
    return `Meu nome é ${this.nome}, Minha idade é ${this.Idade}, Minha profissão è ${this.profissao}`
};

console.log(pessoa.descrever());

pessoa.Idade = 50;
pessoa.profissao = "Banqueiro"

console.log(pessoa.descrever());