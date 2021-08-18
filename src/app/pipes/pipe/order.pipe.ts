import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/pipe.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
  //  return null;
  //}

  transform( heroes: Heroe[], orderPor: string = 'nombre' ): Heroe[] {

    switch( orderPor ) {

      case 'nombre': 
        return heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
      
      case 'vuela':
        return heroes.sort( (a,b) => ( a.vuela > b.vuela ) ? -1 : 1 );

      case 'color':
        return heroes.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );

      default:
        return heroes;
    }
  }

}
