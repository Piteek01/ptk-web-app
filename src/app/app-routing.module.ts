import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/dashboard/main/dashboard-main.component')
      .then(m => m.DashboardMainComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./modules/dashboard/main/dashboard-main.component')
      .then(m => m.DashboardMainComponent)
  },
  {
    path: 'operators',
    loadChildren: () => import('./modules/operators/operators-routing.component')
      .then(m => m.OPERATORS_ROUTING)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
