import { Component, AfterViewInit } from '@angular/core';


declare const d3: any;
declare const Chart: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createSummaryPieChart();
    this.createFeaturesBarChart();
    this.createFraudLossesChart();
    this.createFraudLocationsChart();
    this.createClaimAmountsChart();
    this.createWordCloud();
  }

  createSummaryPieChart() {
    new Chart(document.getElementById('summaryPieChart') as HTMLCanvasElement, {
      type: 'pie',
      data: {
        labels: ['Total Claims Processed', 'Total Fraud Predicted', 'Total High-Risk Policies'],
        datasets: [{
          data: [15678, 1245, 489],
          backgroundColor: ['#4caf50', '#f44336', '#ff9800']
        }]
      },
      options: { responsive: true }
    });
  }

  createFeaturesBarChart() {
    new Chart(document.getElementById('featuresBarChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['Policy Lapses', 'Claim Amount', 'Repair Costs', 'Past Accidents', 'Vehicle Age'],
        datasets: [{
          label: 'Claims Contributed',
          data: [120, 95, 85, 70, 50],
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });
  }

  createFraudLossesChart() {
    new Chart(document.getElementById('fraudLossesChart') as HTMLCanvasElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Fraud Losses ($)',
          data: [5000, 7000, 4500, 6500, 8000, 9000, 8500, 10000, 9500, 11000, 12000, 11500],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: true
        }]
      }
    });
  }

  createFraudLocationsChart() {
    new Chart(document.getElementById('fraudLocationsChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
        datasets: [{
          label: 'Total Claims Impacted',
          data: [500, 450, 400, 350, 300],
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
      },
      options: { indexAxis: 'y', responsive: true }
    });
  }

  createClaimAmountsChart() {
    new Chart(document.getElementById('claimAmountsChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['800894','783085','550892', '390893', '290896'],
        datasets: [{
          label: 'Claim Amount ($)',
          data: [10000, 9500, 8500, 7500, 7000],
          backgroundColor: 'rgba(153, 102, 255, 0.6)'
        }]
      },
      options: { indexAxis: 'y', responsive: true }
    });
  }

  createWordCloud() {
    const features = [
      { text: 'Policy Lapses', size: 50 },
      { text: 'Claim Amount', size: 40 },
      { text: 'Repair Costs', size: 30 },
      { text: 'Past Accidents', size: 25 },
      { text: 'Vehicle Age', size: 20 },
      { text: 'Driver History', size: 35 },
      { text: 'Coverage Type', size: 28 },
      { text: 'Location Risk', size: 22 },
      { text: 'Claims Frequency', size: 45 },
      { text: 'Premium Amount', size: 18 }
    ];

    const wordCloud = d3.select('#wordCloud')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '300px')
      .append('g')
      .attr('transform', 'translate(150,150)');

    d3.layout.cloud()
      .size([300, 300])
      .words(features.map(d => ({ text: d.text, size: d.size })))
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .fontSize((d:any) => d.size)
      .on('end', (words:any) => {
        wordCloud.selectAll('text')
          .data(words)
          .enter().append('text')
          .style('font-size', (d:any) => `${d.size}px`)
          .style('fill', '#69b3a2')
          .attr('text-anchor', 'middle')
          .attr('transform', (d:any) => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
          .text((d:any) => d.text);
      })
      .start();
  }
}
