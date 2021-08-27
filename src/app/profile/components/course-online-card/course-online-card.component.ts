import { Component, OnInit } from '@angular/core';
import { CourseDetail } from '../../interfaces/udemy.interface';
import { UdemyService } from '../../services/udemy.service';

@Component({
  selector: 'app-course-online-card',
  templateUrl: './course-online-card.component.html',
  styleUrls: ['./course-online-card.component.css'],
})
export class CourseOnlineCardComponent implements OnInit {
  courseCode: string[] = ['2178672', '3662358', '2819881', '3820862'];
  course!: CourseDetail;

  constructor(private UdemyService: UdemyService) {
    console.log('iniciando constructor');
    this.UdemyService.getCourseUdemy('3662358');
  }

  ngOnInit(): void {}
}
