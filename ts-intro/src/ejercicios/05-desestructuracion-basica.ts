/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detlles: Detalles,
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detlles: {
        autor: 'Ed Sheeran',
        anio: 2015,
    }
}

//Desestructuración de objetos
//Obtiene los valores del objeto que asignamos
const {volumen, segundo, cancion, detlles} = reproductor;
const {autor} = detlles;


// console.log('El volumen actual es de:', volumen);
// console.log('El segundo actual es de:', segundo);
// console.log('El cancion actual es de:', cancion);
// console.log('El autor actual es de:', autor);


//Desestructuración de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , ,p3 ] = dbz;

// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);