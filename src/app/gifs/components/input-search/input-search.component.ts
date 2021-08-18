import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  //injectando servicio de busqueda
  constructor( private gifsService:GifsService ) { }

  ngOnInit(): void {
  }

  //decorador importado de @angular/core !=operador que asegura que n es nulo
  //referencia de imput en hmtl
  @ViewChild('txtbuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar(){
    //obteniendo valor de html
    var busqueda : string = this.txtBuscar.nativeElement.value;
    //validar que no llegue campo vacio
    if(busqueda.trim().length ===0){
      return;
    }    
    //valores no repetidos
    //if(this.gifsService.listBusqueda.includes(busqueda)){
    //  return ;
    //}
    //agregando en servicio lista de busqueda
    this.gifsService.addGifs(busqueda);
    //borrando caja de texto input en html
    this.txtBuscar.nativeElement.value = '';
  }

}
