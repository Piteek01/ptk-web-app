import { Route } from '@angular/router';
import { IModulesEnum } from './core/enums/imodules.enum';

export const routes: Route[] = [
  {
    path: IModulesEnum.dashboard,
    data: { moduleId: IModulesEnum.dashboard},
    loadChildren: () => import('./modules/auth/auth-routes.component')
      .then(m => m.DASHBOARD_ROUTING)
  },
  {
    path: IModulesEnum.operators,
    data: { moduleId: IModulesEnum.operators },
    loadChildren: () => import('./modules/auth/auth-routes.component')
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
