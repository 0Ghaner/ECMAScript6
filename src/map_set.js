let meuMap = new Map();
meuMap.set("nome", "Natan");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

// [nome => natan]
// [stack => html, css, js]

const cpfs = new Set()

cpfs.add('45632165412')
cpfs.add('45618155412')
cpfs.add('05618165412')

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['maria souza', 'joão roberto', 'natan santos', 'jose da silva', 'maria souza', 'luana', 'luana']

const arrayComoSet = new Set([...array])

const arraySemRepetidos = [...arrayComoSet]

console.log(arrayComoSet);
console.log(arraySemRepetidos);