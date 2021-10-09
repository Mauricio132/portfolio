import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Pagination } from '../../interface/gifs.interface';

@Component({
  selector: 'app-card-gif',
  templateUrl: './card-gif.component.html',
  styleUrls: ['./card-gif.component.css'],
})
export class CardGifComponent implements OnInit {
  // Seleccionamos o iniciamos el valor del <select>
  itemsPerPage: number[] = [5, 10, 20, 30, 50];
  itemsCard: number = 10;
  //pagination
  page: number = 1;
  itemsPage: number = this.itemsCard;

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  get busquedaGifs() {
    //arreglar paginacion para no ver la consola en rojo
    //this.pagination = this.gifsService.totalPagination;
    return this.gifsService.listGifs;
  }

  get lastItem() {
    return this.gifsService.lastItem;
  }

  get lastSearch() {
    return this.gifsService.listBusqueda[0];
  }

  itemsPerPageChange() {
    this.itemsPage = this.itemsCard;
    this.gifsService.loadGifs(
      this.lastSearch,
      this.itemsCard,
      this.busquedaGifs.pagination.offset
    );
  }

  controlsChange(pag: number) {
    this.page = pag;
    this.gifsService.loadGifs(this.lastSearch, this.itemsCard, pag - 1);
  }
}
