import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart-component',
  imports: [],
  templateUrl: './bar-chart-component.html',
  styleUrl: './bar-chart-component.scss'
})
export class BarChartComponent {
  ngAfterViewInit(): void {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4'],
        datasets: [{
          label: 'Doanh thu (triệu VNĐ)',
          data: [30, 45, 25, 60],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Biểu đồ doanh thu theo tháng' }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}
