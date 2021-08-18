import { Component, Input, OnInit } from '@angular/core';
import { Heroe, TableHead } from '../../interfaces/pipe.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() heroes : Heroe[] = [];
  @Input() tableHead : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
