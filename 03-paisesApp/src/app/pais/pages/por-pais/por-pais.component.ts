import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService){}


  buscar(evento:string): void{
    this.hayError = false;
    this.termino = evento;

    this.paisService.buscarPais(evento)
    .subscribe((paises) =>{
      console.log(paises);
      this.paises = paises;
    },(err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(event:string):void{
    this.hayError = false;
    // TODO: Crear sugenecia
  }


}
