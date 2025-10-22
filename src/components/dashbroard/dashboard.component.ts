import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BarChartComponent } from '../bar-chart-component/bar-chart-component';
import { PieChartComponent } from '../pie-chart-component/pie-chart-component';
import { LineChartComponent } from "../line-chart-component/line-chart-component";

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  cards = [
    { label: 'Users', value: '26K', chartId: 'usersChart', color: '#6558f5' },
    { label: 'Income', value: '$6,200', chartId: 'incomeChart', color: '#2d9cdb' },
    { label: 'Conversion Rate', value: '2.49', chartId: 'conversionChart', color: '#f2b93b' },
    { label: 'Sessions', value: '44K', chartId: 'sessionsChart', color: '#eb5757' }
  ];

  selectedRange: 'day' | 'month' | 'year' = 'month';
  trafficChart!: Chart;

  ngAfterViewInit(): void {
    
  }
  
}
