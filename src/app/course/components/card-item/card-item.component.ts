import { Component, Input, OnInit } from '@angular/core';
import { Capture } from '../../interfaces/course.interface';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  apiUrl: string = apiUrl;
  @Input() capture!: Capture[];

  constructor() {}

  ngOnInit(): void {}
}
