import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css'],
})
export class ExtraInfoComponent implements OnInit {
  @Input() extraInfo!: Skills[];

  constructor() {}

  ngOnInit(): void {}
}
