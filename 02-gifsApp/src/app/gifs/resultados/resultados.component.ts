import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {
  // Constructor
  constructor( private gifsServices: GifsService ){}

  // Getter
  get resultados() {
    return this.gifsServices.resultados;
  }

}
