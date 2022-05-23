/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calculaISV(prodctos: Producto[]): [number, number]{
    let total = 0;

    //Se puede desestructurar los argumentos de la siguiente manera
    //en lugar de poner producto.precio puedo colocar {precio} que seria lo mismo
    prodctos.forEach( ({precio}) => {
        total += precio;
    } )

    return [total, total * 0.15];
}

// const articulos = [telefono, tableta];

// const [total,isv] = calculaISV( articulos );

// console.log('Total:', total);
// console.log('ISV:', isv);