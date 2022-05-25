import { Component } from '@angular/core';
import { SearchGifsResponse } from 'src/app/gifs/interfaces/gifs.interface';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {
  // Constructor con los atributos
  constructor( private gifsService: GifsService ){}

  // Getters
  get historial(): string[]{
    return this.gifsService.historial;
  }

  // Métodos
  buscar( item: string ){
    this.gifsService.buscarGifs(item);
  }
}
