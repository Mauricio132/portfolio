import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MarkerMapsComponent } from './pages/marker-maps/marker-maps.component';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MarkerMapsComponent, MapComponent],
  imports: [CommonModule, MapsRoutingModule, SharedModule],
})
export class MapsModule {}
