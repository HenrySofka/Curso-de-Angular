import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class PipeImagenPipe implements PipeTransform {

  transform(value: Heroe): string {
    if(value.id == null){
      return `assets/no-image.png`;
    }
    return `assets/heroes/${value.id}.jpg`;
  }

}
