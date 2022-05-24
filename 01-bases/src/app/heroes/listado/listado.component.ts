import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Naofumi'];
  heroeEliminado: string = '';

  borrarHeroe():void{
    this.heroeEliminado = this.heroes.shift() || 'No hay héroes';
  }

}
