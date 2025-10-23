import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart-component',
  imports: [
    CommonModule
  ],
  templateUrl: './pie-chart-component.html',
  styleUrl: './pie-chart-component.scss'
})
export class PieChartComponent {
  ngAfterViewInit(): void {
    new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['Sản phẩm A', 'Sản phẩm B', 'Sản phẩm C'],
        datasets: [{
          data: [40, 30, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { position: 'bottom' },
          title: { display: true, text: 'Cơ cấu truy cập' }
        }
      }

    });
  }
}
