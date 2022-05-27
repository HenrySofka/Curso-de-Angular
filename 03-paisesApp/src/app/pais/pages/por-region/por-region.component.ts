import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['eu','efta','caricom','pa','au','usan','eeu','al','asean','cais','cefta','nafta','saarc'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string): void{

    if(region === this.regionActiva){
      return;
    }

    this.regionActiva = region;
    // TODO: hacer el llamado al servicio
    this.paises = [];
    this.paisService.buscarRegion(region)
    .subscribe((paises) =>{
      this.paises = paises;
    });
  }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva)? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
