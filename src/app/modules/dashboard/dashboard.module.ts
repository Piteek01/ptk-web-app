import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardMainComponent } from './main/dashboard-main.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    TranslateModule
  ],
  declarations: [
    DashboardMainComponent
  ],
  exports: [],
  providers: []
})
export class DashboardModule {}
