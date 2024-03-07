class Funcionario {
    constructor(nome, idade, salarioBase) {
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
    }
}

class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horasDeAulaPorSemana) {
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        this.horasDeAulaPorSemana = horasDeAulaPorSemana;
    }

    calcularSalario() {
        const valorDaHora = 700;

        return this.horasDeAulaPorSemana * valorDaHora;
    }
}

let professor = new Professor("Claudio", 31, 23000, "computação", 24);
let professora = new Professor("Kizzy", 26, 23000, "programação", 30);

console.log("Salário do professor :", professor.calcularSalario());
console.log("Salário da professora:", professora.calcularSalario());