import { Component } from '@angular/core';
import { dataGit, dataTemplate } from '../../interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  dataGit : dataGit = {
    "titulo"        : "Codigo Fuente",
    "descripcion"   : "GitHub",
    "url"           : "https://github.com/Mauricio132/curso_angular_app",
  }

  dataTemplate : dataTemplate = {
    "titulo"        : "Template",
    "descripcion"   : "AdminLTE",
    "version"       : "3.1.0",
  }

}
