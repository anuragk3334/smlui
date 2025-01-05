import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  dashboardData = [
    { category: 'Claims Processed', details: '1,200' },
    { category: 'Claims Identified as Fraud', details: '150' },
    { category: 'High-Risk Policies', details: '25' },
  ];
  displayedColumns: string[] = ['category', 'details'];

  // Bar chart reference
  barChart: Chart | undefined;
  chartOptions = {
    title: {
      text: "Fraud Contribution "
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Age",  y: 30  },
        { label: "Policy Type", y: 20  },
        { label: "Region", y: 25  },
        { label: "Claim Amount",  y: 27  }
     
      ]
    }]                
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }
}
