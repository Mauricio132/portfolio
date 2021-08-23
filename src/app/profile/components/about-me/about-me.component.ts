import { Component, Input, OnInit } from '@angular/core';
import { Profile, Education } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  @Input() profile!: Profile;

  @Input() education!: Education[];

  constructor() {}

  ngOnInit(): void {}
}
