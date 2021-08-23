import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  titleHeader: string = 'Reactive Form | Example!';

  constructor() {}

  ngOnInit(): void {}
}
