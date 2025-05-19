//rest
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    
    return soma;
}

console.log(somar(10, 20, 30));

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30));

//spread
const numeros = [1, 2, 3, 4]
console.log(...numeros)

const timesDeFutebolDeSp = ['São Paulo', 'Palmeiras', 'Corinthians', 'Santos']
const timesDeFutebolDoRio = ['Flamengo', 'Vasco', 'Botafogo', 'Fluminense']

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

// timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
console.log(timesDeFutebol);

const carroDaAna = {
    modelo: "gol",
    marca: "vw",
    motor: 1.6
}

const carroDoPedro = {
    ...carroDaAna,
    motor: 1.8
}

console.log(carroDoPedro);

// desestruturação
// const motorDoCarroDoPedro = carroDoPedro.motor;
const { motor: motorDoCarroDoPedro } = carroDoPedro;
const { motor: motorDoCarroDaAna } = carroDaAna;

console.log(motorDoCarroDoPedro);
console.log(motorDoCarroDaAna);

const [ítem1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(ítem1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);