/*
    ===== Código de TypeScript =====
*/
interface Pasajero{
    nombre: string;
    //hijos es opcional
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel'],
}

function imprimeHijos(pasajero: Pasajero): void{
    //Si se le pone '?' verifica si hay hijos y en si no hay muestra undefined
    //Si se le agrega '||' tenemos una retorno en caso de que sea undefined
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);