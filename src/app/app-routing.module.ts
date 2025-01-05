import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainModelComponent } from './train-model/train-model.component';
import { TestClaimsComponent } from './test-claims/test-claims.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
  { path: 'train-model', component: TrainModelComponent },
  { path: 'test-claims', component: TestClaimsComponent },
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'settings', component: SettingsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
