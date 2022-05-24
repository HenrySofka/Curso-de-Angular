import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Tiene los componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // Lo que se ve en toda la app
    exports:[
        ListadoComponent
    ],
    // Los demás modulos que se necesitan
    imports:[
        CommonModule
    ]

})
export class HeroesModule{

}