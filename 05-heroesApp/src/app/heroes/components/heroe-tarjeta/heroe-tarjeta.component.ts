import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card{
      margin-top: 20px
    }

    img{
      border-radius: 10px
    }
  `]
})
export class HeroeTarjetaComponent implements OnInit {
  @Input()
  heroe:Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
