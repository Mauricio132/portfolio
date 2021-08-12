import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent } from './portfolio/info/info.component';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component : InfoComponent,
    pathMatch : 'full'
  },
  {
    path: 'gifs',
    loadChildren : () => import('./gifs/gifs.module').then(m => m.GifsModule)
  },
  {
    path : '404',
    component : Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
