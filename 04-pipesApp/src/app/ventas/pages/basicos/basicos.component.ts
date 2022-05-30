import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'henry';
  nombreUpper: string = 'HENRY';
  nombreCompleto: string = 'henry ferreira';

  fecha: Date = new Date()//Fecha actual

}
