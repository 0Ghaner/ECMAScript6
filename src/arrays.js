const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
})

const alunos = ['Joao', 'Maria', 'Pedro', 'Ana'];

const alunos2 = alunos.map(function (itemAtual) {
    return  {
        nome: itemAtual,
        curso: 'Frontend',
    }
})

console.log(alunos2);

const pedro = alunos2.find(function(item) {
    return item.nome == 'Pedro' // true ou false
})

console.log(pedro);

const indiceDoPedro = alunos2.findIndex(function(item) {
    return item.nome == 'Pedro' // true ou false
})

console.log(indiceDoPedro);

// every

alunos2.push({
    nome: 'Lucas',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend' // true ou false
})

console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend' // true ou false
})

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend' // true ou false
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend) 

console.log(alunosDeBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function (acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomesDosAlunos);
// const numeros = [1, 2, 3, 4, 5];
// const dobroDosNumeros = numeros.map(function (numeroAtual) {
//     return numeroAtual * 2;
// })

// console.log(dobroDosNumeros);