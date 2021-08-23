import { Component, Input, OnInit } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { CourseSmall } from '../../interfaces/course.interface';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css'],
})
export class CardInfoComponent implements OnInit {
  apiUrl: string = apiUrl;
  @Input() course!: CourseSmall;

  constructor() {}

  ngOnInit(): void {}
}
