/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string,
    ){}
}

//Se puede extender de otras clases
class Heroe extends PersonaNormal {//Por defecto los atributos son publicas
    //Se puede declarar los atributos directamente en el contructor
    //Se puede definir el objeto de esta manera, sin tener que declarar los atributos
    constructor(
        public alterEgo: string,
        public edad: number,    
        public nombreReal: string,
    ){
        super(nombreReal, 'New York, USA');
    }

}

const ironman = new Heroe('Ironman', 35, 'Tony');

console.log(ironman);
