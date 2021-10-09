import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsRoutingModule } from './gifs-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchGifsComponent } from './pages/search-gifs/search-gifs.component';
import { GifHistoryComponent } from './components/gif-history/gif-history.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { CardGifComponent } from './components/card-gif/card-gif.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    SearchGifsComponent,
    GifHistoryComponent,
    InputSearchComponent,
    CardGifComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, GifsRoutingModule, NgxPaginationModule, FormsModule],
})
export class GifsModule {}
