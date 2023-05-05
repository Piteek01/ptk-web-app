import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './main/dashboard-main.component';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'regulations',
    pathMatch: 'full',
    component: DashboardMainComponent
  },
  {
    path: '',
    // redirectTo: 'dashboard',
    pathMatch: 'full',
    component: DashboardMainComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
