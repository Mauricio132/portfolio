import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-buscar-capital',
  templateUrl: './buscar-capital.component.html',
  styleUrls: ['./buscar-capital.component.css']
})
export class BuscarCapitalComponent  {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarCapital( termino )
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }

}
