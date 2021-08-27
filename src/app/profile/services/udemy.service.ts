import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Authorization, apiUrlUdemy } from '../../../environments/environment';
import { CourseDetail } from '../interfaces/udemy.interface';

@Injectable({
  providedIn: 'root',
})
export class UdemyService {
  private _authorization: string = Authorization;
  private _apiUrlUdemy: string = apiUrlUdemy;

  constructor(private http: HttpClient) {}

  //: Observable<CourseDetail>

  getCourseUdemy(idCourse: string): Observable<CourseDetail> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json, text/plain, */*')
      .set('Authorization', `${this._authorization}`)
      .set('Content-Type', 'application/json;charset=utf-8');

    return this.http.get<CourseDetail>(
      `${this._apiUrlUdemy}/courses/${idCourse}`,
      { headers }
    );
  }

  getCoursesUdemy(coursesId: string[]): Observable<CourseDetail[]> {
    if (!coursesId || coursesId.length === 0) {
      return of([]);
    }

    const resquests: Observable<CourseDetail>[] = [];
    coursesId.forEach((id) => {
      const resquest = this.getCourseUdemy(id);
      resquests.push(resquest);
    });

    return combineLatest(resquests);
  }
}
