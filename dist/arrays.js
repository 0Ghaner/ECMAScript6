"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Joao', 'Maria', 'Pedro', 'Ana'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var pedro = alunos2.find(function (item) {
  return item.nome == 'Pedro'; // true ou false
});
console.log(pedro);
var indiceDoPedro = alunos2.findIndex(function (item) {
  return item.nome == 'Pedro'; // true ou false
});
console.log(indiceDoPedro);

// every

alunos2.push({
  nome: 'Lucas',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend'; // true ou false
});
console.log(todosAlunosSaoDeFrontend);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend'; // true ou false
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend'; // true ou false
}
var alunosDeBackend2 = function alunosDeBackend2(aluno) {
  return aluno.curso === 'Backend';
}; // apenas uma linha ao inves de tres

var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);
// const numeros = [1, 2, 3, 4, 5];
// const dobroDosNumeros = numeros.map(function (numeroAtual) {
//     return numeroAtual * 2;
// })

// console.log(dobroDosNumeros);