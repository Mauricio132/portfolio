import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { BasicComponent } from './pages/basic/basic.component';
import { PersonalizedComponent } from './pages/personalized/personalized.component';
import { BasicPipeComponent } from './components/basic-pipe/basic-pipe.component';
import { NotCommonPipeComponent } from './components/not-common-pipe/not-common-pipe.component';
import { NumberPipeComponent } from './components/number-pipe/number-pipe.component';
import { OrderPipe } from './pipe/order.pipe';
import { TableComponent } from './components/table/table.component';
import { FlyPipe } from './pipe/fly.pipe';


@NgModule({
  declarations: [
    BasicComponent,
    PersonalizedComponent,
    BasicPipeComponent,
    NotCommonPipeComponent,
    NumberPipeComponent,
    OrderPipe,
    FlyPipe,
    TableComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
  ]
})
export class PipesModule { }
