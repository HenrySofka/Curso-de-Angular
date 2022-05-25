import { Component, ElementRef, ViewChild } from '@angular/core';

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
  buscar():void{
    console.log(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }
}
