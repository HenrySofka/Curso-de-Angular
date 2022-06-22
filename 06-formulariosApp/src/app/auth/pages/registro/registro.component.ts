import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.validatorsService.nombreApellidoPattern) ]],
    email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username: ['', [ Validators.required, this.validatorsService.noPuedeserStrider ], [] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    password2: ['', [ Validators.required ] ],
  }, {
    validators:[ this.validatorsService.camposIguales('password', 'password2') ]
  })
  

  constructor( 
    private fb:FormBuilder, 
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService,
  ) { }


  get emailErrorsMsg():string{
    
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return "El email es requerido"
    }
    if(errors?.['pattern']){
      return "El email necesita un formato valido"
    }
    if(errors?.['emailTomado']){
      return "Este email ya esta en uso"
    }

    return ""
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Henry Ferreira',
      email: 'henry@gmail.com',
      username: 'haffsoul1',
      password: '123456',
      password2: '123456',
    })
  }

  campoNoValido( campo:string ) {
    return this.miFormulario.get(campo)?.invalid && 
    this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }


}
