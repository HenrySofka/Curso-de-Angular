import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'arma'
})
export class ArmaPipe implements PipeTransform{
    transform(isArma:boolean): string{
        // if ternario
        return (isArma)? 'propietario' : 'no tiene'
    }
}