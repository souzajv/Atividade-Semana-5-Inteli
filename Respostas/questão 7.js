class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
            console.log(`Meu animalzinho se chama ${this.nome}, e tem ${this.idade} anos.`);
    }
}

const meuCachorro = new Animal("Pitoco", 5);
const meuGato = new Animal("Miau", 2);

meuCachorro.descrever();
meuGato.descrever();