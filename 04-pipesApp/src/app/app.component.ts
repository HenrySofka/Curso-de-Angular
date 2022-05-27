import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'henry ferreira';
  valor: number = 1000;
  objeto = {
    nombre: 'Haff'
  }

  mostrarNombre():void{
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.objeto);
  }


}
