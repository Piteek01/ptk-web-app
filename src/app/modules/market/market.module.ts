import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MarketRoutingModule } from './market-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MarketMainComponent } from './main/market-main.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarketRoutingModule
  ],
  declarations: [
    MarketMainComponent
  ],
  exports: [],
  providers: []
})
export class MarketModule {}
