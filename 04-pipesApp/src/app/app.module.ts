import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// Módulos personalizados
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
// Cambiar el locale de la APP
import localEs from '@angular/common/locales/es-UY'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'
registerLocaleData( localEs );
registerLocaleData( localFr );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [// Se provee al local el idioma español por defecto
    {
      provide: LOCALE_ID, useValue: 'es-UY'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
