import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { FormComponent } from './pages/form/form.component';
import { ReactiveSelectComponent } from './components/reactive-select/reactive-select.component';
import { ReactiveBasicComponent } from './components/reactive-basic/reactive-basic.component';
import { ReactiveDinamicoComponent } from './components/reactive-dinamico/reactive-dinamico.component';
import { ReactiveSwitchesComponent } from './components/reactive-switches/reactive-switches.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormComponent,
    ReactiveSelectComponent,
    ReactiveBasicComponent,
    ReactiveDinamicoComponent,
    ReactiveSwitchesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ReactiveFormModule { }
