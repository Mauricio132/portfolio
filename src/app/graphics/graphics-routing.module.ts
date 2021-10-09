import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewChartComponent } from './pages/view-chart/view-chart.component';

const routes: Routes = [
  { path: '', children: [{ path: 'view', component: ViewChartComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphicsRoutingModule {}
