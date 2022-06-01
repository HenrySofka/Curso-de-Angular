import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  @Input()
  heroe!:Heroe;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private heroeService: HeroesService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroeService.getHeroePorId(id))
      )
      .subscribe(heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
