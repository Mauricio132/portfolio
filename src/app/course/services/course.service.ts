import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../../environments/environment';
import { Course } from '../interfaces/course.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private _apiUrl: string = apiUrl;

  constructor(private http: HttpClient) {}

  getModule(arg: string): Observable<Course[]> {
    const params = new HttpParams().set('module', arg);

    return this.http.get<Course[]>(`${this._apiUrl}/module-angulars`, {
      params,
    });
  }
}
