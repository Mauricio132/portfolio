import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { SearchGifsComponent } from './pages/search-gifs/search-gifs.component';
import { GifHistoryComponent } from './components/gif-history/gif-history.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { CardGifComponent } from './components/card-gif/card-gif.component';


@NgModule({
  declarations: [
    SearchGifsComponent,
    GifHistoryComponent,
    InputSearchComponent,
    CardGifComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule
  ]
})
export class GifsModule { }
