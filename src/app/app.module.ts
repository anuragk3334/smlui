import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestClaimsComponent } from './test-claims/test-claims.component';

// Import Angular Material Modules
import { MatTableModule } from '@angular/material/table'; // For table
import { MatButtonModule } from '@angular/material/button'; // For button
import { MatIconModule } from '@angular/material/icon'; // For icons like "attach_file"
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // For spinner
import { MatToolbarModule } from '@angular/material/toolbar'; // For toolbar
import { MatFormFieldModule } from '@angular/material/form-field'; // For form fields
import { MatInputModule } from '@angular/material/input'; // For input fields
import { MatListModule } from '@angular/material/list'; // For list

import { HttpClientModule } from '@angular/common/http'; // For making HTTP requests
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { TrainModelComponent } from './train-model/train-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticsComponent } from './analytics/analytics.component'; // Import BrowserAnimationsModule
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FraudTrendsChartComponent } from './fraud-trends-chart/fraud-trends-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { SettingsComponent } from './settings/settings.component';

import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    TestClaimsComponent,
    DashboardComponent,
    LeftPanelComponent,
     NavbarComponent,
     RightPanelComponent,
     TrainModelComponent,
     AnalyticsComponent,
     FraudTrendsChartComponent,
     SettingsComponent
  
  ],
  imports: [
    BrowserModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    HttpClientModule, // Add HttpClientModule here
    MatToolbarModule,
    MatTableModule, // Add MatTableModule
    MatProgressSpinnerModule, // Add 
    MatButtonModule, // For buttons
    MatIconModule, // For icons
    MatInputModule,
    MatFormFieldModule, // For form fields
    MatListModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
