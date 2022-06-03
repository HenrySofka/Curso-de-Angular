import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //------------------------------------------------//
  //Otra forma de inicializar datos en el formulario//
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5),
  // })
  //------------------------------------------------//

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    //Para inicializar el formulario con valores
    this.miFormulario.reset({
      'nombre': 'RTX 4080ti',
      'precio': 1600,
    });
  }

  //Form Builder-------------------------//
  miFormulario: FormGroup = this.fb.group({
    //[valor, validador sincrono, validador asincrono]
    'nombre': [null, [Validators.required, Validators.minLength(3)]],
    'precio': [null, [Validators.min(0), Validators.required]],
    'existencias': [null, [Validators.min(0), Validators.required]],
  })
  //-------------------------------------//

  //Validacion de nombre valido------------------------//
  validarNombre(valor: string): boolean | null {
    return this.miFormulario.controls[valor].errors &&
      this.miFormulario.controls[valor].touched
  }
  //---------------------------------------------------//

  //Método de gardar para el Submit del formulario-----//
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
