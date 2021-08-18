import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarCapitalComponent } from './pages/buscar-capital/buscar-capital.component';
import { BuscarPaisComponent } from './pages/buscar-pais/buscar-pais.component';
import { BuscarRegionComponent } from './pages/buscar-region/buscar-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';

const routes: Routes = [
  {
    path: '',
    children : [
      { path: 'search-country', component : BuscarPaisComponent},
      { path: 'search-capital', component : BuscarCapitalComponent},
      { path: 'search-region', component : BuscarRegionComponent},
      { path: 'view-country/:id', component : ViewCountryComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
