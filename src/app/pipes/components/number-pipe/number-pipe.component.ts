import { Component } from '@angular/core';

@Component({
  selector: 'app-number-pipe',
  templateUrl: './number-pipe.component.html',
  styleUrls: ['./number-pipe.component.css']
})
export class NumberPipeComponent {

  ventasNetas: number = 2567789.5567;
  porcentaje : number = 0.4856;

}
