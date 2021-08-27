import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private http: HttpClient) {
    console.log('iniciando back end stripe...');

    this.http
      .get(apiUrl, { observe: 'response' })
      .subscribe((err) => console.log(err));
  }
}
