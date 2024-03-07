class SomadorDeNotas {
    constructor() {
        this.total = 0;
    }

    adicionarNota(nota) {
        this.total += nota;
    }

    verTotal() {
        console.log(`a soma das notas foi: ${this.total}`);
    }
}

const total = new SomadorDeNotas ();

total.adicionarNota(7);
total.adicionarNota(8);

total.verTotal();