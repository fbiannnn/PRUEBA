function escalera(lista) {

    let listaUnica = Array.from(new Set(lista)).sort((a, b) => a - b);


    const escaleraReal = new Set([1, 10, 11, 12, 13]);
    const listaSet = new Set(lista);
    let contieneEscaleraReal = true;
    escaleraReal.forEach(num => {
        if (!listaSet.has(num)) contieneEscaleraReal = false;
    });
    if (contieneEscaleraReal) return "ESCALERA REAL";

    for (let i = 0; i < listaUnica.length - 1; i++) {
        if (listaUnica[i] + 1 !== listaUnica[i + 1]) return "NO TIENES ESCALERA";
    }
    return "ESCALERA";
}

function verificarVariasListas(listas) {
    let resultados = [];
    for (let l of listas) {
        resultados.push(escalera(l));
    }
    return resultados;
}


const casos = [
    [1, 2, 3, 4, 5, 6, 7],
    [10, 11, 12, 13, 1, 3, 4],
    [5, 3, 4, 6, 7, 8, 9],
    [3, 5, 7, 9, 11, 2, 4],
    [1, 10, 11, 12, 13, 7, 2]
];

console.log(verificarVariasListas(casos));
