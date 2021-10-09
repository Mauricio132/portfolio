import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkerMapsComponent } from './pages/marker-maps/marker-maps.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'marker', component: MarkerMapsComponent },
      { path: '**', redirectTo: 'marker-maps' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
