import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-card-gif',
  templateUrl: './card-gif.component.html',
  styleUrls: ['./card-gif.component.css'],
})
export class CardGifComponent {
  constructor(private gifsService: GifsService) {}

  get busquedaGifs() {
    return this.gifsService.listGifs;
  }

  get lastItem() {
    return this.gifsService.lastItem;
  }
}
