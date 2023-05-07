import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { OperatorsRoutingModule } from './operators-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    OperatorsRoutingModule,
    TranslateModule
  ],
  declarations: [
    // OperatorsMainComponent
  ],
  exports: [],
  providers: []
})
export class OperatorsModule {}
