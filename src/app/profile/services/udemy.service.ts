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

  getData(): CourseDetail[] {
    return this.data;
  }

  data: CourseDetail[] = [
    {
      _class: 'course',
      id: 3820862,
      title: 'React Native: Crea tu E-Commerce móvil para iOS y Android',
      url: '/course/react-native-crea-ecommerce-movil-ios-android/',
      is_paid: true,
      price: '$19.99',
      price_detail: {
        amount: 19.99,
        currency: 'USD',
        price_string: '$19.99',
        currency_symbol: '$',
      },
      price_serve_tracking_id: '2mMi64G0RyO5laU7Ioo6NA',
      visible_instructors: [
        {
          _class: 'user',
          title: 'Agustin Navarro Galdon',
          name: 'Agustin',
          display_name: 'Agustin Navarro Galdon',
          job_title: 'Frontend Developer',
          image_50x50:
            'https://img-c.udemycdn.com/user/50x50/30747612_55e6_2.jpg',
          image_100x100:
            'https://img-c.udemycdn.com/user/100x100/30747612_55e6_2.jpg',
          initials: 'AN',
          url: '/user/agustin-navarro-galdon/',
        },
      ],
      image_125_H: 'https://img-c.udemycdn.com/course/125_H/3820862_ab37_3.jpg',
      image_240x135:
        'https://img-c.udemycdn.com/course/240x135/3820862_ab37_3.jpg',
      is_practice_test_course: false,
      image_480x270:
        'https://img-c.udemycdn.com/course/480x270/3820862_ab37_3.jpg',
      published_title: 'react-native-crea-ecommerce-movil-ios-android',
      tracking_id: 'tOFh28VvT6CUC6xxWFhlJA',
    },
    {
      _class: 'course',
      id: 2819881,
      title: 'GIT y GITHUB desde cero!',
      url: '/course/introduccion-git-github/',
      is_paid: true,
      price: '$19.99',
      price_detail: {
        amount: 19.99,
        currency: 'USD',
        price_string: '$19.99',
        currency_symbol: '$',
      },
      price_serve_tracking_id: '3NulJ2X4SYOTcqv-tDsfYg',
      visible_instructors: [
        {
          _class: 'user',
          title: 'Noelia Silva',
          name: 'Noelia',
          display_name: 'Noelia Silva',
          job_title: 'Analista en Sistemas, Emprendedora y Profesora IT',
          image_50x50:
            'https://img-c.udemycdn.com/user/50x50/34532790_f013_2.jpg',
          image_100x100:
            'https://img-c.udemycdn.com/user/100x100/34532790_f013_2.jpg',
          initials: 'NS',
          url: '/user/noelia-silva-pellegrini/',
        },
      ],
      image_125_H: 'https://img-c.udemycdn.com/course/125_H/2819881_3f4b_3.jpg',
      image_240x135:
        'https://img-c.udemycdn.com/course/240x135/2819881_3f4b_3.jpg',
      is_practice_test_course: false,
      image_480x270:
        'https://img-c.udemycdn.com/course/480x270/2819881_3f4b_3.jpg',
      published_title: 'introduccion-git-github',
      tracking_id: '-8Qx1orLSWSqJvDWRNMUiw',
    },
    {
      _class: 'course',
      id: 3662358,
      title: 'Angular: De cero a experto - ( Edición 2021 )',
      url: '/course/angular-fernando-herrera/',
      is_paid: true,
      price: '$89.99',
      price_detail: {
        amount: 89.99,
        currency: 'USD',
        price_string: '$89.99',
        currency_symbol: '$',
      },
      price_serve_tracking_id: 'FSyQQ4x-TUulrmhK9N3BBg',
      visible_instructors: [
        {
          _class: 'user',
          title: 'Fernando Herrera',
          name: 'Fernando',
          display_name: 'Fernando Herrera',
          job_title: 'A Full-Stack Developer & Teacher',
          image_50x50:
            'https://img-c.udemycdn.com/user/50x50/11767934_4361_2.jpg',
          image_100x100:
            'https://img-c.udemycdn.com/user/100x100/11767934_4361_2.jpg',
          initials: 'FH',
          url: '/user/550c38655ec11/',
        },
      ],
      image_125_H: 'https://img-c.udemycdn.com/course/125_H/3662358_4d6e.jpg',
      image_240x135:
        'https://img-c.udemycdn.com/course/240x135/3662358_4d6e.jpg',
      is_practice_test_course: false,
      image_480x270:
        'https://img-c.udemycdn.com/course/480x270/3662358_4d6e.jpg',
      published_title: 'angular-fernando-herrera',
      tracking_id: 'rIer9qzKRs2j9ZMBgWqutw',
    },
    {
      _class: 'course',
      id: 2178672,
      title: 'Curso Power BI – Análisis de Datos y Business Intelligence',
      url: '/course/power-bi-analisis-datos-business-intelligence/',
      is_paid: true,
      price: '$64.99',
      price_detail: {
        amount: 64.99,
        currency: 'USD',
        price_string: '$64.99',
        currency_symbol: '$',
      },
      price_serve_tracking_id: 'WKA35SJmRxCBiZV5GDANTw',
      visible_instructors: [
        {
          _class: 'user',
          title: 'Javier Gomez',
          name: 'Javier',
          display_name: 'Javier Gomez',
          job_title: 'MBA, MOS®, MCP®, CAPM®, Data Analyst',
          image_50x50:
            'https://img-c.udemycdn.com/user/50x50/22313124_a5bd.jpg',
          image_100x100:
            'https://img-c.udemycdn.com/user/100x100/22313124_a5bd.jpg',
          initials: 'JG',
          url: '/user/egpjavier/',
        },
        {
          _class: 'user',
          title: 'datdata – Cursos',
          name: 'datdata –',
          display_name: 'datdata – Cursos',
          job_title: 'Aprende Power BI y Análisis de datos',
          image_50x50:
            'https://img-c.udemycdn.com/user/50x50/72390038_aefc_3.jpg',
          image_100x100:
            'https://img-c.udemycdn.com/user/100x100/72390038_aefc_3.jpg',
          initials: 'DC',
          url: '/user/datdata/',
        },
      ],
      image_125_H: 'https://img-c.udemycdn.com/course/125_H/2178672_c203_3.jpg',
      image_240x135:
        'https://img-c.udemycdn.com/course/240x135/2178672_c203_3.jpg',
      is_practice_test_course: false,
      image_480x270:
        'https://img-c.udemycdn.com/course/480x270/2178672_c203_3.jpg',
      published_title: 'power-bi-analisis-datos-business-intelligence',
      tracking_id: 'AMieakEuRl2B1p0IfbfbGQ',
    },
  ];
}
