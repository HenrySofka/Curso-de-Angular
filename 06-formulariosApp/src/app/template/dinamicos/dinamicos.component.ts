import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// Interfaces Locales
interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona:Persona = {
    nombre: 'Henry',
    favoritos:[
      { id: 1, nombre: 'Dark Souls: Prepare to die Edition' },
      { id: 2, nombre: 'Konosuba: Fantastic Days' },
    ]
  }
  nuevoJuego:string = '';




  @ViewChild('formDinamico') formDinamico!: NgForm;

  // Método para validar el string en el campo nombre
  nombreValido(): boolean {
    return this.formDinamico?.controls["nombre"]?.invalid &&
           this.formDinamico?.controls["nombre"]?.touched
  }

  guardar(){
    console.log('Formulario posteado');
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

}
