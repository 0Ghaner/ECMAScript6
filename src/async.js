function funcaoMuitoPesada() {
    let execusoes = 0;
    for (let i = 0; i < 1e9; i++) {
        execusoes++;
    }
    return execusoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execusoes = 0;
        for (let i = 0; i < 1e9; i++) {
        execusoess++;
        }
        resolve(execusoes);
    } catch(e) {
        reject('Deu erro na iteração dos números');
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`);
        }, 3000)
    })
}

// console.log(funcaoMuitoPesada());

async function execusaoPrincipal() {
    console.log("inicio");

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    promiseComParametros('natan@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })
    
    try {
        const resultado = await funcaoMuitoPesadaPromise
        console.log(resultado);
    } catch(e) {
        console.log(e);
    }



    console.log("fim");
}


execusaoPrincipal();
