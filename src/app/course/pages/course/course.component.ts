import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Course } from 'src/app/course/interfaces/course.interface';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  loading!: boolean;
  appUrl!: string;
  appError!: Boolean;
  titleHeader!: string;
  course!: Course;

  constructor(private router: Router, private CourseService: CourseService) {
    // listen to events from Router
    this.router.events.subscribe((event) => {
      this.appError = false;
      this.loading = true;
      if (event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!
        const url = event.urlAfterRedirects;
        this.appUrl = url.split('/')[2];

        //get data course
        this.CourseService.getModule(this.appUrl).subscribe((courses) => {
          //loading false
          this.loading = false;
          //comprobando si hay data en el back
          if (courses.length > 0) {
            this.course = courses[0];
            this.titleHeader = this.course.module.replace('-', ' ');
          } else {
            this.appError = true;
          }
        });
      }
    });
  }

  ngOnInit(): void {}
}
