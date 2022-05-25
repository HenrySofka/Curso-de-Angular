import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    // se le agrega _ para denotar que es una propiedad privada
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes(): Personaje[]{
        // agregar el [... ] antes del this. es una buena practica de js ya que con esto cortamos 
        // la referencia a la hora de pasar los datos
        return [...this._personajes];
    }

    constructor(){}

    // Métodos
    agregarPersonaje( personaje: Personaje ){
        this._personajes.push( personaje );
    }
    

}