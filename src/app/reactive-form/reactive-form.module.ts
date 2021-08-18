import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { FormComponent } from './pages/form/form.component';
import { ReactiveSelectComponent } from './components/reactive-select/reactive-select.component';


@NgModule({
  declarations: [
    FormComponent,
    ReactiveSelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
