import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gif-history',
  templateUrl: './gif-history.component.html',
  styleUrls: ['./gif-history.component.css']
})
export class GifHistoryComponent {

  constructor(private gifsService:GifsService) { }

  get listBusqueda(){
    return this.gifsService.listBusqueda;
  }

  loadGifs(item:string){
    this.gifsService.loadGifs(item);
  }

}
