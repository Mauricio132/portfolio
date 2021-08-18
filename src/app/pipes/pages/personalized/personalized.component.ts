import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/pipe.interface';

@Component({
  selector: 'app-personalized',
  templateUrl: './personalized.component.html',
  styleUrls: ['./personalized.component.css']
})
export class PersonalizedComponent  {

  orderBy : string[] = ["nombre", "vuela", "color"];
  orderActive: string = '';
  private _heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: 'azul'
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: 'negro'
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: 'verde'
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: 'rojo'
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: 'verde'
    },
  ]

  getClassCSS( orderBy: string ): string {
    return (orderBy === this.orderActive) 
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  getHeroes() : Heroe[]{
    return [...this._heroes];
  }

  setOrderBy( orderBy: string ) {

    if ( orderBy === this.orderActive ) { return; }
    this.orderActive = orderBy;
    
  }

}
