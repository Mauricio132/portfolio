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
    this.http.get(apiUrl, { observe: 'response' }).subscribe(
      (resp) => {
        console.log(`Strapi | status : ${resp.status}`);
      },
      (err) => console.log(`strapi | status : ${err.status}`)
    );
  }
}
