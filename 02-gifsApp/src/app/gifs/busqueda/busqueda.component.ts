import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // El signo de ! es para indicar que la variable local siempre va estar ahí
  // en este caso #txtBuscar
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  // Constructor con los atributos
  constructor( private gifsServices: GifsService ){}

  buscar():void{
    // Variable con el valor del txtBuscar
    const valor = this.txtBuscar.nativeElement.value;
    
    // Controlar que no envien string vacios
    if ( valor.trim().length === 0 ) {
      return;
    }
    
    // Se utiliza el método buscarGifs
    this.gifsServices.buscarGifs( valor );
    // Se setea el valor del txtBuscar a un string vacio
    this.txtBuscar.nativeElement.value = '';
  }
}
