import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  // Mover las propiedades 
  // Hacer un componente agregar
  // Usar un @Input
  nuevo:Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  }

  agregarNuevoPersonaje(personajeNuevo:Personaje){
    this.personajes.push(personajeNuevo);
    console.log(personajeNuevo);
    console.log(this.personajes);
  }
}
