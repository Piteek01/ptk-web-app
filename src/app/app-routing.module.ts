import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'market',
    loadChildren: () =>
      import('./modules/market/market.module').then((m) => m.MarketModule)
  },
  // {
  //   path: 'ma',
  //   loadChildren: () =>
  //     import('./modules/myaccount/myaccount.module').then((m) => m.MyAccountModule)
  // },
  {
    path: '**',
    redirectTo: 'market'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
