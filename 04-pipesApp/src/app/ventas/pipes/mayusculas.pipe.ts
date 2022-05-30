import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(value:string, enMayusculas:boolean = true): string{
        // if ternario
        return (enMayusculas)? value.toUpperCase() : value
    }
}