import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule
  ]
})
export class GifsModule { }
