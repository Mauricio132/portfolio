import { Component } from '@angular/core';
import { dataGit, dataTemplate } from '../../interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  dataGit: dataGit = {
    titulo: '',
    descripcion: '',
    url: '',
  };

  dataTemplate: dataTemplate = {
    titulo: 'Template',
    descripcion: 'AdminLTE',
    version: '3.1.0',
  };
}
