import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css'],
})
export class ImgCardComponent implements OnInit {
  @Input() profile!: Profile;

  constructor() {}

  ngOnInit(): void {}
}
