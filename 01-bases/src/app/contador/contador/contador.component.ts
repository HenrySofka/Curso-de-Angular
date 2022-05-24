import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }}</strong></h3>

        <!-- <los eventos van entre parentecis -->
        <!-- Tarea 1 -->
        <button (click)=" acumular(base); "> + {{ base }}</button>
        <span> {{ numero }} </span>
        <button (click)=" acumular(-base); "> - {{ base }}</button>
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    numero: number = 10;
  
    // Métodos en Angular
    acumular(valor: number){
      this.numero +=valor;
    }
  
    // Tarea 1
    base: number = 5;
}