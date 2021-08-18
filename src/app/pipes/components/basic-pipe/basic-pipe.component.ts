import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-pipe',
  templateUrl: './basic-pipe.component.html',
  styleUrls: ['./basic-pipe.component.css']
})
export class BasicPipeComponent  {

  nombreLower: string = 'mauricio';
  nombreUpper: string = 'MAURICIO';
  nombreCompleto: string = 'mAUrICio NegrETE';

  fecha: Date = new Date(); // el día de hoy

}
