import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais, PaisSmall } from '../interfaces/paises.interfaces';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  // regiones: string[] = ['eu','efta','caricom','pa','au','usan','eeu','al','asean','cais','cefta','nafta','saarc'];
  private _regiones: string[] =[ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  private baseUrl = 'https://restcountries.com/v2';



  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor(
    private http:HttpClient
  ) { }

  getPaisesPorRegion(region:string): Observable<PaisSmall[]>{
    const url = `${this.baseUrl}/region/${ region }?fields=name,alpha3Code`;
    return this.http.get<PaisSmall[]>(url);
  }

  getPaisPorAlphaCode(codigo:string):Observable<Pais | null>{

    if(!codigo){
      return of(null);
    }

    const url = `${this.baseUrl}/alpha/${ codigo }`;
    return this.http.get<Pais>(url);
  }
  
  getPaisPorCodigoSmall(codigo:string):Observable<PaisSmall>{
    const url = `${this.baseUrl}/alpha/${ codigo }?fields=name,alpha3Code`;
    return this.http.get<PaisSmall>(url);
  }
  
  getPaisPorCodigos(borders:string[]):Observable<PaisSmall[]>{
    if(!borders){
      return of([]);
    }

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach( codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion);
    } )

    return combineLatest( peticiones );


  }


}
