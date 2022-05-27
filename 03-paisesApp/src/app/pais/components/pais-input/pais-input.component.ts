import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  // Evento de emición que emite un string
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // Evento que emite cuando se deja de escribir en el input
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string ='';


  // Es un observable que se emitirá cuando se deja de escribir en el input
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  // Se activa una única vez cuando el componente es creado
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor=>{
        this.onDebounce.emit(valor);
      })
  }


  buscar():void{
    // Se emite el termino de la barra de busqueda
    this.onEnter.emit(this.termino);
  }

  teclaPresionada():void{
    this.debouncer.next(this.termino);

  }
  

}
