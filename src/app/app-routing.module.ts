import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainModelComponent } from './train-model/train-model.component';
import { TestClaimsComponent } from './test-claims/test-claims.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth.guard';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
 
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]},
  { path: 'train-model', component: TrainModelComponent,canActivate: [AuthGuard] },
  { path: '', component: TestClaimsComponent ,canActivate: [AuthGuard]},
  {path: 'analytics', component: AnalyticsComponent,canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent,canActivate: [AuthGuard]},
  {path: 'about-us', component: AboutMeComponent,canActivate: [AuthGuard]}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
