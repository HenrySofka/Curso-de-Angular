import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // se crea un getter con los personajes que estan en el servicio en lugar de tenerlos
  // en este componente 
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  //Inyección de dependencias
  constructor(private dbzService: DbzService){

  }

}
