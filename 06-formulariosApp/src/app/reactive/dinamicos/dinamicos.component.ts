import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  //Getter para obtener las propiedades de favoritos
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  //Form Builder---------------------------------------//
  miFormulario: FormGroup = this.fb.group({
    //[valor, validador sincrono, validador asincrono]
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    //Arreglo de form control
    favoritos: this.fb.array([
      //[valor, validador sincrono, validador asincrono]
      ['Dark Souls', Validators.required],
      ['Konosuba FD', Validators.required],
    ], Validators.required),
  })
  //---------------------------------------------------//
  
  
  //Form control a parte del Form Principal------------//
  //(valor, validador sincrono, validador asincrono)
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  //---------------------------------------------------//


  //Validacion de nombre valido------------------------//
  validarNombre(valor: string): boolean | null {
    return this.miFormulario.controls[valor].errors &&
      this.miFormulario.controls[valor].touched
  }
  //---------------------------------------------------//
  
  //Método para agregar un juego al FormArray----------//
  agregarFavorito(): void{
    if(this.nuevoFavorito.invalid){
      return;
    }
    
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset()
  }
  //---------------------------------------------------//
  
  //Método para eliminar un control del FormArray------//
  eliminarFavorito(index:number): void{
    //Método que remueve del FormArray un control dependiendo del index
    this.favoritosArr.removeAt(index)
  }
  //---------------------------------------------------//
  
  //Método que se llama al hacer submit del formulario-//
  guardar(): void {
    //Pregunta si el formulario es valido
    if (this.miFormulario.invalid) {
      //Esta método hace que los campos queden con el tauched en TRUE
      this.miFormulario.markAllAsTouched();
      return;
    }

    //Método que limpia el formulario
    this.miFormulario.reset();
  }
  //---------------------------------------------------//

}
