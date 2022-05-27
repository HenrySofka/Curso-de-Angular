import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent  {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService){}


  buscar(evento:string): void{
    this.hayError = false;
    this.termino = evento;
    this.mostrarSugerencias=false;

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
    this.termino = event;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(event)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }


}
