import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fly'
})
export class FlyPipe implements PipeTransform {

  transform( valor: boolean ): string { 

    return ( valor ) ? 'vuela': 'no vuela';

  }
}
