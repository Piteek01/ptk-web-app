import { Route } from '@angular/router';
import { IModulesEnum } from './core/enums/imodules.enum';
import { authGuard } from './core/guards/auth.guard';

export const routes: Route[] = [
  {
    path: IModulesEnum.dashboard,
    canMatch: [authGuard],
    loadChildren: () => import('./modules/auth/auth-routes.component')
      .then(m => m.DASHBOARD_ROUTING)
  },
  {
    path: IModulesEnum.login,
    loadComponent: () => import('./modules/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: IModulesEnum.operators,
    canMatch: [authGuard],
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
