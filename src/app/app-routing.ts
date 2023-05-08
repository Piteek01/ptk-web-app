import { NgModule } from '@angular/core';
import { Route } from '@angular/router';

export const routes: Route[] = [
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
    path: '',
    loadComponent: () => import('./modules/dashboard/main/dashboard-main.component')
      .then(m => m.DashboardMainComponent)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];
