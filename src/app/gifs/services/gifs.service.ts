import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiGiphy } from 'src/environments/environment';
import {
  Gif,
  SearchGifsResponse,
  Pagination,
} from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private _urlApi: string = apiGiphy;
  //private _pagination!: Pagination;
  public listGifs!: SearchGifsResponse;
  public lastArg: string = '';

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
      //cargar ultima busqueda de Gifs
      this.loadGifs(this._historial[0]);
    }
  }

  get listBusqueda() {
    //rompiendo referencia
    return [...this._historial];
  }

  /* get totalPagination() {
    return this._pagination;
  }*/

  get lastItem() {
    return this.lastArg;
  }

  addGifs(item: string) {
    //valores no repetidos
    //if(!this._historial.includes(query)){
    //agregando item al principio del arreglo
    this._historial.unshift(item);
    //solo arreglo de 10 elementos
    this._historial = this._historial.splice(0, 10);
    //guardando en local store
    localStorage.setItem('historial', JSON.stringify(this._historial));
    //}
    //obteniendo ultimo arg buscado
    this.lastArg = item;
    //cargar gifs
    this.loadGifs(item);
  }

  loadGifs(item: string, limit: number = 10, offset: number = 0) {
    //observable
    //let url: any = `http://api.giphy.com/v1/gifs/search?api_key=sgzx5nQFDDozyd6ipYNFRN06HmDUtpyV&q=${item}&limit=3`;
    const params = new HttpParams()
      .set('api_key', 'sgzx5nQFDDozyd6ipYNFRN06HmDUtpyV')
      .set('limit', limit)
      .set('offset', offset)
      .set('q', item);

    this.http
      .get<SearchGifsResponse>(`${this._urlApi}/search`, { params })
      .subscribe((resp) => {
        this.listGifs = resp;
      });
  }
}
