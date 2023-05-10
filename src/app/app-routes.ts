import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./modules/dashboard/main/dashboard-main.component')
      .then(m => m.DashboardMainComponent)
  },
  {
    path: 'operators',
    loadChildren: () => import('./modules/operators/operators-routes.component')
      .then(m => m.OPERATORS_ROUTING)
  },
  {
    path: 'e404',
    loadComponent: () => import('./shared/errors/e404/e404.component')
      .then(m => m.E404Component)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/e404'
  },
];
