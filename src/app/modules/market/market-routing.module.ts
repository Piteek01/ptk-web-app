import { RouterModule, Routes } from '@angular/router';
import { MarketMainComponent } from './main/market-main.component';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'market',
    pathMatch: 'full',
    component: MarketMainComponent
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
export class MarketRoutingModule {}
