import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined; 

  constructor(private heoresService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heoresService.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes)
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return
    } else {
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;

      this.heoresService.getHeroePorId(heroe.id!)
        .subscribe(heroe => this.heroeSeleccionado = heroe);
    }



  }

}
