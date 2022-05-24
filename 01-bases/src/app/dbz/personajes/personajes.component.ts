import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // Se puede definir otro nombre a la propiedad, colocando el nombre deseado al @Input
  @Input()
  personajes: Personaje[] = [];

}
