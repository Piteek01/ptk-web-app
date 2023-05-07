import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'operators',
    loadComponent: () => import('./modules/operators/main/operators-main.component')
      .then(m => m.OperatorsMainComponent)
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
