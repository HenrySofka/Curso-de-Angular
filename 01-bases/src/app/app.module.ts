import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';// importación del módulo 

// Tarea:
// Crear un módulo llamado ContadorModule
// declaraciones y exportaciones
import { ContadorModule } from './contador/contador.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeroesModule, // Se agrega el módelo creado
    BrowserModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
