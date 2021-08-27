import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CLIENT_ID_UDEMY,
  CLIENT_SECRET_UDEMY,
  apiUrlUdemy,
} from '../../../environments/environment';
import { CourseDetail } from '../interfaces/udemy.interface';

@Injectable({
  providedIn: 'root',
})
export class UdemyService {
  private _clientSecret: string = CLIENT_SECRET_UDEMY;
  private _clientId: string = CLIENT_ID_UDEMY;
  private _apiUrlUdemy: string = apiUrlUdemy;

  constructor(private http: HttpClient) {}

  //: Observable<CourseDetail>

  getCourseUdemy(idCourse: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      Accept: 'application/json, text/plain, */*',
      Authorization:
        'Basic QmxrNk5ZR3dKRkJDT0lvQTBvODhYYmpMTVNyUEVaaHRZWFh5V3BWNTpkWTVRT1I3Q2x1V29MSUFYRDdZYUdCb2FSb0pmQ1ZXemRYQWhXamtsdUVSUUtsU0pTZ2hMOXpzRVN1a0JOZWtNQU91OEV2OEsxWjVLcEhpcHVKdWxvWWx0OTVsbVliNndpV3lEYjE0RlNrQk02OEx4Rnh2NnV5UnBlVE4ydkVhaA==',
      'Content-Type': 'application/json;charset=utf-8',
    });

    console.log('iniciando peticion');

    /*
    return this.http.get<CourseDetail>(
      `${this._apiUrlUdemy}/courses/${idCourse}`,
      { headers: headers }
    );*/

    this.http
      .get(
        'https://www.udemy.com/api-2.0/courses/238934/?fields[course]=title,headline',
        { headers }
      )
      .subscribe((i) => {
        console.log(i);
      });
  }
}
