import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor:string = 'sin valor'): Heroe[] {
    switch(ordenarPor){
      case 'nombre':{
        return heroes.sort((a,b) =>(a.nombre > b.nombre)? 1: -1);
      }
      case 'edad':{
        return heroes.sort((a,b) =>(a.edad > b.edad)? 1: -1);
      }
      case 'arma':{
        return heroes.sort((a,b) =>(a.arma > b.arma)? 1: -1);
      }
      default:{
        return heroes;
      }
    }
  }

}
