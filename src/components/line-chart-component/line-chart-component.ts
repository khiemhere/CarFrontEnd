import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart-component.html',
  styleUrls: ['./line-chart-component.scss']
})
export class LineChartComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Chart('trafficChart', {
      type: 'line',
      data: {
        labels: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
          {
            label: 'Unique Visitors',
            data: [70, 50, 120, 180, 200, 100, 120, 220, 180, 230, 90, 110],
            borderColor: '#4b9df8',
            backgroundColor: 'rgba(75, 157, 248, 0.2)',
            fill: true,
            tension: 0.4,
            borderWidth: 2
          },
          {
            label: 'Visits',
            data: [30, 80, 140, 160, 90, 60, 110, 100, 120, 150, 130, 100],
            borderColor: '#3ebd93',
            backgroundColor: 'rgba(62, 189, 147, 0.2)',
            fill: true,
            tension: 0.4,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(200, 200, 200, 0.2)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  }
}
