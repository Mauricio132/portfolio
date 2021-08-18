import { Component } from '@angular/core';
import { SideBarOption } from '../../interfaces/sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  sidebar : SideBarOption = {
    data : [
      //menu Angular
      {
        name        : "Angular",
        app         : [
          //gifs
          {
            nombre      : "AppGifs",
            routerLink  : "gifs",
            icon        : "fas fa-cube",
            class       : "",
            unique      : true,
            level2      : [],
          },//country
          {
            nombre      : "AppCountry",
            routerLink  : "",
            icon        : "fas fa-globe",
            class       : "fas fa-angle-left right",
            unique      : false,
            level2      : [
              { nombre      : "Search Country", routerLink  : "/country/search-country",},
              { nombre      : "Search capital", routerLink  : "/country/search-capital",},
              { nombre      : "Search region", routerLink  : "/country/search-region",},
            ],
          },//pipes
          {
            nombre      : "AppPipes",
            routerLink  : "",
            icon        : "fab fa-pied-piper" ,
            class       : "fas fa-angle-left right",
            unique      : false,
            level2      : [
              { nombre      : "Basic", routerLink  : "/pipe/basic",},
              { nombre      : "Personalized", routerLink  : "/pipe/personalized",},
            ],
          } ,//reactive-form
          {
            nombre      : "AppReactiveForm",
            routerLink  : "reactive-form/example",
            icon        : "fab fa-wpforms",
            class       : "",
            unique      : true,
            level2      : [],
          } ,//maps // graphics //CRUD //login
        ]
      },//Menu React
      {
        name        : "React Native",
        app         : [
          {
            nombre      : "E-commerce Mobile",
            routerLink  : "",
            icon        : "fa fa-mobile",
            class       : "",
            unique      : true,
            level2      : [],
          },
        ]
      },//Menu PowerBi
      {
        name        : "PowerBi",
        app         : [
          {
            nombre      : "Introduction",
            routerLink  : "/powerbi-intro",
            icon        : "fas fa-desktop",
            class       : "",
            unique      : true,
            level2      : [],
          },
          {
            nombre      : "Business Intelligence",
            routerLink  : "powerbi-bi",
            icon        : "fas fa-desktop",
            class       : "",
            unique      : true,
            level2      : [],
          },
        ]
      },
    ]
  }
}
