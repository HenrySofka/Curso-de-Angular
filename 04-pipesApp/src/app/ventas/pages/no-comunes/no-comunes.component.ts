import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect -------------------------//
  nombre: string = 'Haff';
  genero: string = 'masculino';
  
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  cambiarPersona():void{
    if(this.genero === 'masculino'){
      this.nombre = 'Rhea'
      this.genero = 'femenino'
    } else {
      this.nombre = 'Haff'
      this.genero = 'masculino'
    }
  }
  //------------------------------------//
  
  //i18nPlural -------------------------//
  clientes: string[] = ['Rhea', 'Haff', 'Nhox', 'Elizabeth'];

  clientesMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  eliminarCliente(): void{
    this.clientes.shift();
  }
  //------------------------------------//
  
  //KeyValue --------------------------//
  persona = {
    nombre: 'Haff',
    edad: 22,
    direccion: 'Lordran'
  }
  //------------------------------------//
  
  //JsonPipe ---------------------------//
  heroes = [
    {
      nombre:'Naofumi',
      titulo: 'Héroe del escudo',
      edad: 22,
      armaSagrada:true
    },
    {
      nombre:'Kizuna',
      titulo: 'Heroína de la caza',
      edad: 18,
      armaSagrada:true
    },
    {
      nombre:'Raphtalia',
      titulo: 'Heroína de la katana',
      edad: 18,
      armaSagrada:false
    },
  ]
  //------------------------------------//

  //Async Pipe -------------------------//
  miObservable = interval(5000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  })

  //------------------------------------//
}
