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
  chart!: Chart;
  currentView: 'day' | 'month' | 'year' = 'month';

  // Dữ liệu mẫu
  dataSets = {
    day: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data1: [50, 60, 40, 80, 100, 90, 120],
      data2: [20, 40, 30, 50, 70, 60, 80],
    },
    month: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data1: [70, 60, 120, 200, 180, 140, 190, 210, 170, 130, 90, 150],
      data2: [40, 80, 100, 160, 120, 80, 140, 100, 90, 60, 80, 110],
    },
    year: {
      labels: ['2021', '2022', '2023', '2024', '2025'],
      data1: [800, 950, 1100, 1250, 1400],
      data2: [400, 700, 900, 1000, 1200],
    }
  };

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart() {
    const data = this.dataSets[this.currentView];

    this.chart = new Chart('lineChartCanvas', {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Visits',
            data: data.data1,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Unique Users',
            data: data.data2,
            borderColor: 'rgba(255,99,132,1)',
            backgroundColor: 'rgba(255,99,132,0.2)',
            tension: 0.4,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          title: { display: true, text: 'Traffic Overview' },
        },
        scales: {
          y: { beginAtZero: true },
        },
      }
    });
  }

  changeView(view: 'day' | 'month' | 'year') {
    if (this.currentView === view) return;

    this.currentView = view;
    const newData = this.dataSets[view];

    // Cập nhật dữ liệu
    this.chart.data.labels = newData.labels;
    this.chart.data.datasets[0].data = newData.data1;
    this.chart.data.datasets[1].data = newData.data2;

    // Cập nhật biểu đồ
    this.chart.update();
  }
}
