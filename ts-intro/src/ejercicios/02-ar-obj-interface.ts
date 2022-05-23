/*
    ===== Código de TypeScript =====
*/

//Areglos con tipo de dato definido
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];


//Interfaces de objetos
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];

    //Para hacer una variable opcional solamente se le agrega un '?' al final
    puebloNatal?: string;
}

//Objetos
const personaje: Personaje = {
    nombre : 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}
//Setear valor en atributo del objeto
personaje.puebloNatal = 'Lordran'

console.table(personaje);