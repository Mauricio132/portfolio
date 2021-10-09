import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Other',
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100, 150]];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB', '#00F7AD', '#00ED63'],
    },
  ];
}
