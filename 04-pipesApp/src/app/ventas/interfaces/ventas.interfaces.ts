export enum Armas{
    Escudo, 
    Herramienta_de_caza,
    Katana
}

export interface Heroe{
    nombre:string;
    titulo: string;
    edad: number;
    arma: Armas;
    armaSagrada:boolean
}