import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsRoutingModule } from './graphics-routing.module';

import { ChartsModule } from 'ng2-charts';

import { ViewChartComponent } from './pages/view-chart/view-chart.component';
import { SharedModule } from '../shared/shared.module';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [ViewChartComponent, BarChartComponent, PieChartComponent],
  imports: [CommonModule, GraphicsRoutingModule, ChartsModule, SharedModule],
})
export class GraphicsModule {}
