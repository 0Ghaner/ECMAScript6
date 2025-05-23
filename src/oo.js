// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon('Pikachu', 'Elétrico');

class Pokemon {
    #hp = 100;

    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com ${nomeAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp);
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico');
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp);

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();

const pikachu = new Pokemon('pikachu', 'elétrico');
// pikachu.atacar('choque do trovão');
// pikachu.nome = 'Pikachu';
// pikachu.tipo = 'Elétrico';

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pokemon);