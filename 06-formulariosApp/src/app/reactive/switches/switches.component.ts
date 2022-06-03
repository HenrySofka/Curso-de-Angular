import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    //Para inicializar el formulario con valores
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });

    //Se utiliza para mantener la relación de entre el formulario y el objeto
    //Se extrae la propiedad de condiciones y se mantiene el resto
    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest}) => {
      this.persona = rest;
    });

  }
  //Form Builder---------------------------------------//
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    //El método requiredTrue, valida solamente si es TRUE
    condiciones: [false, Validators.requiredTrue]
  })
  //---------------------------------------------------//

  //Objeto persona-------//
  persona = {
    genero: 'F',
    notificaciones: true
  }
  //---------------------//

  //Método para guardar una persona--------------------//
  guardar(): void{

    const formValue = {...this.miFormulario.value}
    delete formValue.condiciones;

    this.persona = formValue;
  }
  //---------------------------------------------------//

}
