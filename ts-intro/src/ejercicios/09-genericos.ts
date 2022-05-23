/*
    ===== Código de TypeScript =====
*/

//Para definir una función de tipo Genérico se le asigna el tipo <T> y al argumento se le asigna T
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

//Se puede espesificar lo que se devuelve
let soyExplicito = queTipoSoy<string>('Hola Mundo');