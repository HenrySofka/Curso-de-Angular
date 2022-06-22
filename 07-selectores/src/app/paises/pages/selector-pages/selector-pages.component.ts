import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall, Pais } from '../../interfaces/paises.interfaces';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  });


  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: PaisSmall[] = [];
  cargando: boolean = false;


  constructor(
    private fb:FormBuilder,
    private paisesService: PaisesService,
  ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    //Cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap(( _ ) => {
        this.miFormulario.get('pais')?.reset('');
        this.cargando = true;
      }),
      switchMap(region => this.paisesService.getPaisesPorRegion( region ))
    )
    .subscribe(paises => {
      this.paises = paises;
      this.cargando = false;
    });

    //Cuando cambie el pais
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap(() => {
        this.miFormulario.get('frontera')?.reset('');
        this.cargando = true;
      }),
      switchMap( codigo => this.paisesService.getPaisPorAlphaCode(codigo) ),
      switchMap( pais => this.paisesService.getPaisPorCodigos(pais?.borders!))
    )
    .subscribe(paises => {
      this.fronteras = paises;
      this.cargando = false;
    })
      
  }

  guardar(): void{
    
  }

}
