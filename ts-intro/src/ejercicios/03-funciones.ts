/*
    ===== Código de TypeScript =====
*/

//Definir una funcion con sus parametros y lo que retorna
function sumar(a: number, b: number): number{
    return (a + b);
}
//igual que la anterior
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

//Definir funciones con valores opcionales
//Los parametros opcionales deberian ir al final
//Se puede poner valores por defecto a las funciones
function multiplicar(numero: number,  base: number = 2, otroNumero?: number): number{
    return numero * base;
}

const resultado = multiplicar(10, 20);

//console.log(resultado);


//Perte 2:
interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarPv: ()=> void;//Así se declara una función y lo que retorna, pero sin su lógica
}


function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {//Aquí se declara la lógica de la función que aparece en la interfaz
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarPv();