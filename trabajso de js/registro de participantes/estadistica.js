function promedioAltura(participantes) {
    let suma = 0;
    for (let p of participantes) suma += p.altura;
    return Math.round((suma / participantes.length) * 100) / 100;
}

function promedioEdad(participantes) {
    let suma = 0;
    for (let p of participantes) suma += p.edad;
    return Math.round((suma / participantes.length) * 100) / 100;
}

module.exports = { promedioAltura, promedioEdad };
