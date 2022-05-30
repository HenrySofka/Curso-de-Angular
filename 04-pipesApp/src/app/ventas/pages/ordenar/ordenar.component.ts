import { Component } from '@angular/core';
import { Armas, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  isMayuscula:boolean = true;
  ordenarPor:string = '';


  heroes: Heroe[] = [
    {
      nombre:'Naofumi',
      titulo: 'Héroe del escudo',
      edad: 22,
      arma:Armas.Escudo,
      armaSagrada:true
    },
    {
      nombre:'Kizuna',
      titulo: 'Heroína de la caza',
      edad: 18,
      arma:Armas.Herramienta_de_caza,
      armaSagrada:true
    },
    {
      nombre:'Raphtalia',
      titulo: 'Heroína de la katana',
      edad: 18,
      arma:Armas.Katana,
      armaSagrada:false
    },
  ]

  cambioDeLetras():void{
    this.isMayuscula = !this.isMayuscula;
  }

  cambiarOrden(valor:string): void{
    this.ordenarPor = valor;
  }
  
}
