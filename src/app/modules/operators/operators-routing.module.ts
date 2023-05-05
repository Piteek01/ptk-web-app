import { RouterModule, Routes } from '@angular/router';
import { OperatorsMainComponent } from './main/operators-main.component';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    // redirectTo: 'dashboard',
    pathMatch: 'full',
    component: OperatorsMainComponent
  },
  {
    path: '',
    // redirectTo: 'dashboard',
    pathMatch: 'full',
    component: OperatorsMainComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule {}
