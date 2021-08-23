import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SharedModule } from '../shared/shared.module';
import { CourseComponent } from './pages/course/course.component';

@NgModule({
  declarations: [CardItemComponent, CardInfoComponent, CourseComponent],
  imports: [CommonModule, CourseRoutingModule, SharedModule],
})
export class CourseModule {}
