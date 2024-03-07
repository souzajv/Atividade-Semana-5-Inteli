class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu animal se chama ${this.nome}, tem ${this.idade} anos.`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    miar() {
        console.log(`Meu miau mia dessa forma: Miar (ele é da roça).`);
    }
}

const gato = new Gato("Miau", 2, "laranja");
const cachorro = new Animal("Pitoco", 5);

gato.descrever();
cachorro.descrever();
gato.miar();
