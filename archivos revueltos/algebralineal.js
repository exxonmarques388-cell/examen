function gaussJordan(matrix) {
    let n = matrix.length;        // número de filas
    let m = matrix[0].length;     // número de columnas (incluye términos independientes)

    // Eliminación hacia adelante
    for (let i = 0; i < n; i++) {
        // Paso 1: asegurar que el pivote no sea cero
        if (matrix[i][i] === 0) {
            for (let k = i + 1; k < n; k++) {
                if (matrix[k][i] !== 0) {
                    [matrix[i], matrix[k]] = [matrix[k], matrix[i]]; // swap
                    break;
                }
            }
        }

        let pivot = matrix[i][i];

        // Paso 2: eliminar coeficientes debajo del pivote
        for (let j = i + 1; j < n; j++) {
            let factor = matrix[j][i];
            for (let k = i; k < m; k++) {
                matrix[j][k] -= (factor / pivot) * matrix[i][k];
            }
        }
    }

    // Eliminación hacia atrás
    for (let i = n - 1; i >= 0; i--) {
        let pivot = matrix[i][i];
        for (let j = i - 1; j >= 0; j--) {
            let factor = matrix[j][i];
            for (let k = i; k < m; k++) {
                matrix[j][k] -= (factor / pivot) * matrix[i][k];
            }
        }
    }

    // Normalizar pivotes al final
    for (let i = 0; i < n; i++) {
        let pivot = matrix[i][i];
        for (let k = i; k < m; k++) {
            matrix[i][k] /= pivot;
        }
    }

    // Extraer soluciones
    let soluciones = [];
    for (let i = 0; i < n; i++) {
        soluciones.push(matrix[i][m - 1]);
    }

    return soluciones;
}

// Tu sistema:
let sistema = [
    [1, 1, 1, -6],
    [2, 1, -1, -1],
    [1,  -2, 3, -6]
];

console.log(gaussJordan(sistema)); 
// → [3, -12, -8]
