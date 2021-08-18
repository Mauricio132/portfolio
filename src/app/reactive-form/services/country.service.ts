import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { CountrySmall, Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = 'https://restcountries.eu/rest/v2'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [ ...this._regiones ];
  }

  constructor( private http: HttpClient ) { }

  getPaisesPorRegion( region: string ): Observable<CountrySmall[]> {

    const url: string = `${ this.baseUrl }/region/${ region }?fields=alpha3Code;name`
    return this.http.get<CountrySmall[]>( url );
  }

  getPaisPorCodigo( codigo: string ): Observable<Country | null> {
    if ( !codigo ) {
      return of(null)
    }

    const url = `${ this.baseUrl }/alpha/${ codigo }`;
    return this.http.get<Country>( url );
  }

  getPaisPorCodigoSmall( codigo: string ): Observable<CountrySmall> {
    const url = `${ this.baseUrl }/alpha/${ codigo }?fields=alpha3Code;name`;
    return this.http.get<CountrySmall>( url );
  }

  getPaisesPorCodigos( borders: string[] ): Observable<CountrySmall[]> {

    if ( !borders || borders.length === 0 ) {
      return of([]);
    }

    const peticiones: Observable<CountrySmall>[] = [];
    borders.forEach( codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push( peticion );
    });
    return combineLatest( peticiones );

  }
}
