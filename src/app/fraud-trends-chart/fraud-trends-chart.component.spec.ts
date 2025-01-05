import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudTrendsChartComponent } from './fraud-trends-chart.component';

describe('FraudTrendsChartComponent', () => {
  let component: FraudTrendsChartComponent;
  let fixture: ComponentFixture<FraudTrendsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudTrendsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudTrendsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
