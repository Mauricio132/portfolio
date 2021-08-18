import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountryRoutingModule } from './country-routing.module';
import { InputCountryComponent } from './components/input-country/input-country.component';
import { TableCountryComponent } from './components/table-country/table-country.component';
import { BuscarPaisComponent } from './pages/buscar-pais/buscar-pais.component';
import { BuscarCapitalComponent } from './pages/buscar-capital/buscar-capital.component';
import { BuscarRegionComponent } from './pages/buscar-region/buscar-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';


@NgModule({
  declarations: [
    InputCountryComponent,
    TableCountryComponent,
    BuscarPaisComponent,
    BuscarCapitalComponent,
    BuscarRegionComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule
  ]
})
export class CountryModule { }
