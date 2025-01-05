import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-fraud-trends-chart',
  templateUrl: './fraud-trends-chart.component.html',
  styleUrls: ['./fraud-trends-chart.component.css']
})
export class FraudTrendsChartComponent implements OnInit {
  ngOnInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {
    const ctx = document.getElementById('fraudTrendsChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Age', 'Policy Type', 'Region', 'Claim Amount'],
        datasets: [
          {
            label: 'Fraud Contribution',
            data: [30, 20, 25, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
