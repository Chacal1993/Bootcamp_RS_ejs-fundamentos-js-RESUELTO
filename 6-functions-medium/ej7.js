// crea la función  sumaDesdeHasta
// debe recibir dos parámetros tipo number, 
// y devolver la suma de los enteros desde el primero hasta el ultimo

// Si los argumentos no son tipo number debe lanzar un Error con:
// throw new Error('Debo recibir números');

// utilizad un bucle for (let i = desde; i <= hasta; i++ ) {}

// Ha de pasar los test adjuntados.

let sumaDesdeHasta = (desde, hasta) => {
    let sumatorio = 0;
    // Aquí tu código.  Desde aquí:
    if (typeof desde === 'number' && typeof hasta === 'number') {
        for (let i = desde; i <= hasta; i++) {
            if (i === hasta)
                sumatorio += i;
            else
                sumatorio += i;
        }
    }

    else
        throw new Error('Debo recibir números');
    // Hasta aquí.
    return sumatorio;
}


let test = require('../test.js');

test(sumaDesdeHasta, [1, 2], 3);
test(sumaDesdeHasta, [2, 2], 2);
test(sumaDesdeHasta, [2, 5], 14);
test(sumaDesdeHasta, [4, 6], 15);
test(sumaDesdeHasta, [true], 2);

/* try {
    sumaDesdeHasta('1');
    sumaDesdeHasta(true);
    sumaDesdeHasta();
    console.log('suspendes: muestraPorConsolaEurosEnPesetas debe lanzar un error si no recibe un número');

} catch (error) {
    console.log('apruebas');

} */