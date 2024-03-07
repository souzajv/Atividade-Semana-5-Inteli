class Carro {
    constructor() {
        this.velocidadeAtual = 1;
    }

    acelerar(velocidade) {
        this.velocidadeAtual += velocidade;
        console.log(this.velocidadeAtual)
    }
}

let carro = new Carro()
carro.acelerar(1)
carro.acelerar(3)
console.log(carro.velocidadeAtual)


