import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // Porner el signo de ! es para que TypeScript no muestre el error de no inicializado
  pais!: Country;

  // Se puede usar el ActivatedRoute para suscribirnos a cualquier cambio en la URL
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)//Lo que hace el tap es que recibe el producto 
        //del observable y lo imprime en consola
      )
      .subscribe(pais => this.pais = pais);
  }

}
