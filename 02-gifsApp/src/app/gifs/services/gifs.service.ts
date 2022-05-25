import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private apiKey: string = 'MiTAcCh2dCyGV5m54jv1tt6MVC7T82rA';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  
  public resultados: Gif[] = [];

  get historial():string[] {
    return [...this._historial];
  }

  constructor( private http:HttpClient ){
    // Cargar desde el localStorage el historial de busquedas
    if( localStorage.getItem('historial') ){
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    }
    // Cargar desde el localStorage los resultados de las busquedas 
    if( localStorage.getItem('resultados') ){
      this.resultados = JSON.parse( localStorage.getItem('resultados')! );
    }


  }

  buscarGifs( query:string ){
    // Para que siempre se guarden en minúscula
    query = query.toLocaleLowerCase();

    // Si el item ya esta en el arreglo no se lo agrega al mismo 
    if ( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      // Obtenemos los 10 primeros valores del arreglo 
      this._historial = this._historial.splice(0,10);
      // Setea en el localStorage el historial
      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    // Parametros Http, aquí podemos definir los parametros que vamos a utilizar en la consulta
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q',query);


    // En el get se aplican los parametros y variables definidos anteriormente
    // En este caso servicioUrl y params
    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params })
      .subscribe( ( response )  => {
        console.log( response.data );
        this.resultados = response.data;
        // Setea en el localStorage los resultados
        localStorage.setItem('resultados', JSON.stringify( this.resultados ));
      });

  }

}
