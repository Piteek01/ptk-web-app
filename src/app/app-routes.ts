import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./modules/dashboard/main/dashboard-main.component')
      .then(m => m.DashboardMainComponent)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'operators',
    loadChildren: () => import('./modules/operators/operators-routes.component')
      .then(m => m.OPERATORS_ROUTING)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  },
];
