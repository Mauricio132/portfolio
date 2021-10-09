import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchGifsComponent } from './pages/search-gifs/search-gifs.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const routes: Routes = [
  {
    path: '',
    component: SearchGifsComponent,
    //component: PaginationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifsRoutingModule {}
