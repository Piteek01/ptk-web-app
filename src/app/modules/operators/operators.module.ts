import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { OperatorsRoutingModule } from './operators-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OperatorsMainComponent } from './main/operators-main.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OperatorsRoutingModule,
    TranslateModule
  ],
  declarations: [
    OperatorsMainComponent
  ],
  exports: [],
  providers: []
})
export class OperatorsModule {}
