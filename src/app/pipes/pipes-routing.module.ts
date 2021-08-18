import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './pages/basic/basic.component';
import { PersonalizedComponent } from './pages/personalized/personalized.component';

const routes: Routes = [
  {
    path : '',
    children : [
      { path : 'basic'        , component : BasicComponent},
      { path : 'personalized' , component : PersonalizedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
